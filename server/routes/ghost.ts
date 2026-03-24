import { Hono } from 'hono'

const ghost = new Hono()

ghost.get('/', (c) => c.text('Ghost API is up!'))

ghost.post('/subscribe', async (c) => {
  try {
    const { email } = await c.req.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return c.json({ error: 'A valid email is required' }, 400)
    }

    const adminKey = process.env.GHOST_ADMIN_API_KEY
    if (!adminKey) {
      console.error('GHOST_ADMIN_API_KEY not configured')
      return c.json({ error: 'Server configuration error' }, 500)
    }

    // Ghost Admin API key format: {id}:{secret}
    const [id, secret] = adminKey.split(':')

    // Create JWT for Ghost Admin API
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT', kid: id }))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const now = Math.floor(Date.now() / 1000)
    const payload = btoa(JSON.stringify({
      iat: now,
      exp: now + 300,
      aud: '/admin/',
    })).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    // Sign with HMAC-SHA256
    const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map((byte: string) => parseInt(byte, 16)))
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )

    const signature = await crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      new TextEncoder().encode(`${header}.${payload}`)
    )

    const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const token = `${header}.${payload}.${sig}`

    const ghostUrl = 'https://notes.thedejijoseph.com'

    // Create member (subscriber) via Ghost Admin API
    const response = await fetch(`${ghostUrl}/ghost/api/admin/members/`, {
      method: 'POST',
      headers: {
        Authorization: `Ghost ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        members: [{ email }],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      if (response.status === 422) {
        return c.json({ success: true, message: 'Already subscribed!' })
      }
      console.error('Ghost Admin API error:', data)
      return c.json({ error: data.errors?.[0]?.message || 'Failed to subscribe' }, response.status)
    }

    return c.json({ success: true, message: 'Subscribed successfully!' })
  } catch (error) {
    console.error('Error subscribing:', error)
    return c.json({ error: 'Failed to subscribe. Please try again.' }, 500)
  }
})

export default ghost
