const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'A valid email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const adminKey = Deno.env.get('GHOST_ADMIN_API_KEY');
    if (!adminKey) {
      console.error('GHOST_ADMIN_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Ghost Admin API key format: {id}:{secret}
    const [id, secret] = adminKey.split(':');

    // Create JWT for Ghost Admin API
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT', kid: id }))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const now = Math.floor(Date.now() / 1000);
    const payload = btoa(JSON.stringify({
      iat: now,
      exp: now + 300,
      aud: '/admin/',
    })).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Sign with HMAC-SHA256
    const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map((byte: string) => parseInt(byte, 16)));
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      new TextEncoder().encode(`${header}.${payload}`)
    );

    const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const token = `${header}.${payload}.${sig}`;

    const ghostUrl = 'https://notes.thedejijoseph.com';

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
    });

    const data = await response.json();

    if (!response.ok) {
      // Ghost returns 422 if member already exists
      if (response.status === 422) {
        return new Response(
          JSON.stringify({ success: true, message: 'Already subscribed!' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error('Ghost Admin API error:', data);
      return new Response(
        JSON.stringify({ error: data.errors?.[0]?.message || 'Failed to subscribe' }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully!' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error subscribing:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
