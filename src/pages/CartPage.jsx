import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../components/mockdata"; // Import the mock data
import Checkout from "../components/Checkout";

const CartPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center text-white mt-32">Product not found</div>
    );
  }

  return (
    <div className="relative min-h-screen pt-32 pb-16 px-4 md:px-8 flex justify-center items-center">
      <div className="bg-gray-800 text-textColor2 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl mb-4 text-amber-900">${product.price}</p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Colours</h2>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Size</h2>
              <div className="flex space-x-2 mt-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border rounded hover:bg-gray-200 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Description</h2>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <Link to={"/checkout"}>
              <button className="bg-amber-900 text-white py-2 px-6 rounded flex items-center space-x-2">
                <span>Add To Cart</span>
              </button>
            </Link>
            <button className="bg-gray-700 text-white py-2 px-6 rounded flex items-center space-x-2">
              <span>Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
