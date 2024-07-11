import React from "react";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";

const Homepage = () => {
  
  return (
    <div>
      <Hero />
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 m-2 md:m-5">
          <button className="bg-amber-900 py-1 px-4 md:px-12 rounded-md text-sm md:text-base">
            Bodysuits
          </button>
          <button className="bg-btnColor py-1 px-4 md:px-12 rounded-md text-sm md:text-base">
            Lingerie
          </button>
          <button className="bg-btnColor py-1 px-4 md:px-12 rounded-md text-sm md:text-base">
            Plunge bras
          </button>
          <button className="bg-btnColor py-1 px-4 md:px-12 rounded-md text-sm md:text-base">
            Gym sets
          </button>
          <button className="bg-btnColor py-1 px-4 md:px-12 rounded-md text-sm md:text-base">
            Pants
          </button>
        </div>
        {/* Product List */}
        <div className="m-2 md:m-20">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
