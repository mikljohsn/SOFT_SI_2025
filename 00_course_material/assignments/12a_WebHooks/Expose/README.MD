# 12a Webhook integration

## 1.

Make sure you have a server with an endpoint set up to receive webhooks with a body.
E.g. a simple express server that posts the req body.

## 2.

Run your server and make sure the port is exposed via localtunnel or something similar.

## 3.

Create post request to the webhook endpoint to register a webhook e.g: `https://something.loca.lt/webhooks/register`,

With a body matching what the endoint expects:

`
{
    "url": "https://webhook.site/aba66c5e-5666-4fe3-836a-5b96c542a000",
    "event": "payment_received"
}
`

Note that there are multiple allowed events:

``
    'payment_received',
    'payment_processed',
    'invoice_processing',
    'invoice_completed'
``

If successful the response is a success message.

You can also unregister the webhook with the same body, but the endpoint is `https://something.loca.lt/webhooks/unregister`.

## 4.

To see the active webhooks for the system you can create a get request on the endpoint `https://something.loca.lt/webhooks/ping`,
that returns all currently active webhooks.

