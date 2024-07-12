import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Cross T Bodysuit",
    price: 165,
    image: "/images/image-one.jpg", 
  },
  {
    id: 2,
    name: "Firm Bust Bodysuit",
    price: 95,
    image: "/images/image-two.jpg", 
  },
  {
    id: 3,
    name: "Silky Bodysuit",
    price: 120,
    image: "/images/image-three.jpg", 
  },
  {
    id: 4,
    name: "Open Cut Bodysuit",
    price: 150,
    image: "/images/image-four.jpg", 
  },
  {
    id: 5,
    name: "Slim Girl Bodysuit",
    price: 84,
    image: "/images/image-five.jpg", 
  },
  {
    id: 6,
    name: "Open Top Bodysuit",
    price: 125,
    image: "/images/image6.jpg", 
  },
  {
    id: 7,
    name: "Cross Bodysuit",
    price: 165,
    image: "/images/image7.jpg", 
  },
  {
    id: 8,
    name: "U-Plunge Bodysuit",
    price: 145,
    image: "/images/image8.jpg", 
  },
  {
    id: 9,
    name: "Contour Bodysuit",
    price: 105,
    image: "/images/image9.jpg", 
  },
  {
    id: 10,
    name: "Thin Fit Bodysuit",
    price: 75,
    image: "/images/image10.jpg", 
  },
  {
    id: 11,
    name: "Plunge Bodysuit",
    price: 135,
    image: "/images/image11.jpg", 
  },
  {
    id: 12,
    name: "Lace Bodysuit",
    price: 105,
    image: "/images/image12.jpg", 
  },
];

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
