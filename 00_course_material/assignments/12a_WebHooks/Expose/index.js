import express from 'express';
import axios from 'axios';
import db from './db.js';  
import { ALLOWED_EVENTS } from './events.js'; 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); 

/**
 * @openapi
 * /webhooks/register:
 *   post:
 *     summary: Register a webhook for a specific event
 *     description: Register a webhook URL to receive notifications for a specified event type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *               - event
 *             properties:
 *               url:
 *                 type: string
 *                 format: uri
 *                 example: https://webhook.site/abc123
 *               event:
 *                 type: string
 *                 example: payment_received
 *                 description: The type of event the webhook is subscribed to.
 *     responses:
 *       200:
 *         description: Webhook registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Webhook registered successfully
 *       400:
 *         description: Missing URL or event, or invalid event type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing url or event
 */
app.post('/webhooks/register', (req, res) => {
  const { url, event } = req.body;

  
  if (!url || !event) {
    return res.status(400).send({ error: 'Missing url or event' });
  }

 
  if (!ALLOWED_EVENTS.includes(event)) {
    return res.status(400).send({ error: `Invalid event type: ${event}` });
  }

  
  const stmt = db.prepare('INSERT INTO webhooks (url, event) VALUES (?, ?)');
  stmt.run(url, event);

  res.send({ message: 'Webhook registered successfully' });
});

/**
 * @openapi
 * /webhooks/unregister:
 *   post:
 *     summary: Unregister a webhook by URL
 *     description: Remove a previously registered webhook URL.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               url:
 *                 type: string
 *                 format: uri
 *                 example: https://webhook.site/abc123
 *     responses:
 *       200:
 *         description: Webhook unregistered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Webhook unregistered successfully
 *       400:
 *         description: Missing URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing url
 */
app.post('/webhooks/unregister', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ error: 'Missing url' });
  }

  const stmt = db.prepare('DELETE FROM webhooks WHERE url = ?');
  stmt.run(url);

  res.send({ message: 'Webhook unregistered successfully' });
});

/**
 * @openapi
 * /ping:
 *   get:
 *     summary: Trigger all registered webhooks
 *     description: This endpoint will trigger all registered webhooks by sending a "ping" event to each of them for integration testing.
 *     responses:
 *       200:
 *         description: Ping sent to all registered webhooks with event type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ping sent to all registered webhooks
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       url:
 *                         type: string
 *                         example: https://webhook.site/abc123
 *                       event:
 *                         type: string
 *                         example: payment_received
 *                       status:
 *                         type: string
 *                         example: 200
 *                       error:
 *                         type: string
 *                         example: "Connection failed"
 *       500:
 *         description: DB error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: DB error
 */
app.get('/ping', (req, res) => {
    db.all('SELECT DISTINCT url, event FROM webhooks', [], async (err, rows) => {
      if (err) return res.status(500).send({ error: 'DB error' });
  
  
      const pingEvent = "ping_event";
  
    
      const results = await Promise.allSettled(rows.map(row => {
        return axios.post(row.url, {
          event: pingEvent,
          data: {
            message: `Test ping event triggered for event: ${row.event}`,
            timestamp: Date.now() // could be to iso format but whatever
          }
        }).then(response => {
          return { 
            url: row.url, 
            event: row.event, 
            status: response.status 
          };
        }).catch(error => {
          return { 
            url: row.url, 
            event: row.event, 
            error: error.message 
          };
        });
      }));
  
      res.send({ message: 'Ping sent to all registered webhooks', results });
    });
  });

app.listen(PORT, () => {
  console.log(`Exposee webhook server running on`, PORT);
});
