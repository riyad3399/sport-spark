import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [data] = useCart();
  const total = data.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
      <Helmet>
        <title>Paymetn - Sport Spark</title>
      </Helmet>
      <h3 className="text-2xl text-center font-semibold">Payment Now!</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
