import React from "react";

const Checkout = () => {
  return (
    <div className="container mx-auto p-8 m-24">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <form>
        <div className="mb-4">
          <label className="block text-textColor2">Name</label>
          <input type="text" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-textColor2">Address</label>
          <input type="text" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-textColor2">Payment Method</label>
          <input type="text" className="w-full border p-2" />
        </div>
        <button type="submit" className="bg-sideColor text-white p-2">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
