import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import 'dotenv/config'
import ghost from './routes/ghost'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => c.text('Hono API is running!'))

app.route('/api/ghost', ghost)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
