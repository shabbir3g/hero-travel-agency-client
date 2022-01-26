import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ orders }) => {
  const { Price, name, _id } = orders;
  console.log(_id, Price);
  let price = Price;
  console.log(price);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(
      "http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("your pament processed successfully");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
    } else {
      setError("");
      console.log(paymentIntent);
      setProcessing(false);

      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0],
      };
      console.log(payment);
      const url = `http://localhost:5000/my-orders/${_id}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        {processing ? (
          <Spinner animation="border" />
        ) : (
          <button className='fw-bold btn btn-primary mt-4' type="submit" disabled={!stripe || success}>
            Pay ${Price}
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckoutForm;
