import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import "./checkoutForm.css";
import useAxiosSecure from "../../../hooks/axiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ item }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();

  // TODO: top classes enrolled updated
  useEffect(() => {
    if (item?.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: item.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [item, axiosSecure]);

  useEffect(() => {
    if (transactionId) {
      fetch(`http://localhost:5000/payments/${item.selectClassId}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("from enrolled", data);
          if (data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "payment successful",
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    }
  }, [transactionId, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log("confirmerror", confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // TODO next staps
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: item.price,
        date: new Date(),
        quantity: item.length,
        classItemId: item._id,
        status: "service pending",
        classesPhotos: item.pictureURL,
        classNames: item.name,
      };
      axiosSecure.post(`/payments/${item._id}`, payment).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm btn-primary mt-4"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Payment
          </button>
        </form>
        {cardError && <p className="text-error font-semibold">{cardError}</p>}
        {transactionId && (
          <p className="text-success text-center text-xl">
            Payment successful transactionId: {transactionId}
          </p>
        )}
      </>
    </div>
  );
};

export default CheckoutForm;
