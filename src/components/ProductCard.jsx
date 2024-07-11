import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="p-4 rounded-lg">
      <div
        className={`${
          isActive ? "bg-white text-red-500" : "bg-transparent text-gray-400"
        } absolute m-1 text-3xl rounded-full p-2 cursor-pointer`}
        onClick={handleClick}
      >
        <FaRegHeart />
      </div>
      <Link to={`/cart/${product.id}`}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg "
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-textColor3 font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
