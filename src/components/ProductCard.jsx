import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="p-4 rounded-lg relative">
      <div className="relative">
        <div
          className={`${
            isActive ? "bg-white text-red-500" : "bg-white text-black"
          } absolute top-2 right-2 text-3xl rounded-full p-2 cursor-pointer`}
          onClick={handleClick}
        >
          <FaRegHeart />
        </div>
        <Link to={`/cart/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </Link>
      </div>
      <Link to={`/cart/${product.id}`}>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-textColor3 font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
