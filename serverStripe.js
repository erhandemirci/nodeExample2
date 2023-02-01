const stripe = require('stripe')('sk_test_51MWlHZL5DDIW0DSD2WiCFAKSO5sFRzO62CVFYQF6We9Uk7bz7QrSwh2bgtrnqPN4TH0UQPzPQs4tGqfzPBFqZ8xS00B7PcgqZk');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51MWlHZL5DDIW0DSDUsrhkMiuSodLoPmYKm3nRpcECUraGe2eL39zkmEYHBkdbSbVnjvYd8v8JhShqalNwHxytuZU00ZFZN1OZj'
  });
});
