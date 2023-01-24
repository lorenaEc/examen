const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items, email } = req.body;

const redirectURL = "http://localhost:3000"
const transformedItem = items.map((product, index) => {

    return {
        price_data: {
          currency: 'sek',
          product_data: {
            images: [product.img],
            name: product.title,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      };
})

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: transformedItem,
  mode: 'payment',
  success_url: redirectURL + '?status=success',
  cancel_url: redirectURL + '?status=cancel',
  metadata: {
    images: JSON.stringify(transformedItem.map((item) => item.image)),
  },
});

res.status(200).json({ id: session.id });
};

export default CreateStripeSession;