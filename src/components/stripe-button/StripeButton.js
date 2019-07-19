import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";

const StripeButton = ({ price, setAlert }) => {
  const priceForStripe = price * 100;
  const publicKey = "pk_test_uFRnaCL9WThxBHFBlWoGpVdw009P008GjZ";
  const onToken = token => {
    console.log(token);
    setAlert("payment successful", "success", 3000);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      description={`
       Your Total is $${price} `}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default connect(
  null,
  { setAlert }
)(StripeButton);
