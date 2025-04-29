import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



// Endpoint using Stripe Checkout
app.post('/create-checkout', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'dkk',
              product_data: {
                name: 'cool beans',
              },
              unit_amount: 420,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:8080/success', // Example success URL. Customer will be redirected here after successful payment. Handle this if you want stuff to happen
        cancel_url: 'http://localhost:8080/cancel', // Example cancel URL -||-
      });
  
      res.json({ url: session.url }); // Response with the session URL that the client can use to redirect to the checkout page
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/success', (req, res) => {
    res.json({ data: 'Payment successful!'}); // Dummy response for success URL.
  });
  
  app.get('/cancel', (req, res) => {
    res.json({ data: 'Payment canceled. Please try again.'} );
  });
  
  



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port`, PORT);
});