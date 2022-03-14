import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KczNOE3WkIkPCRqdBDiDuAqucXZvd33AWtg2nQ9iu66JC3GPBslvu5PgF6mzd6cbcZAsrYHzGY6ah0xhMpv9xbD00b2uvpR3q";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAdress
      shippingAdress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
