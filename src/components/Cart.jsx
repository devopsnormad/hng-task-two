import React from 'react';

const Cart = () => {
  const cartItems = [
    // Your cart data
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 flex justify-between">
            <div>
              <h3 className="text-xl">{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white p-2">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
