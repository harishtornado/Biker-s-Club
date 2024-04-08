"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://bikersclub1.netlify.app//stripe/success"
      cancelUrl="https://bikersclub1.netlify.app//stripe/error"
      language="en-IN"
      currency="INR"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
