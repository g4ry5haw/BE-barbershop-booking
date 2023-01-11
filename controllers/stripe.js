require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.stripePayment = async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(10 * 100),
      currency: "gbp",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.client_secret;
    res.status(200).json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    next(err);
  }
};
