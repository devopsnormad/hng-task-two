import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg">
      <Link to={`/cart/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-textColor3 font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
