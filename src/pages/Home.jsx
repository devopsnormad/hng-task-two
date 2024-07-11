import React from 'react';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className='relative z-10'>
        <div className='flex items-center justify-center gap-8 m-5'>
          <button className='bg-amber-900 py-1 px-12 rounded-md'>Bodysuits</button>
          <button className='bg-btnColor py-1 px-12 rounded-md'>Lingerie</button>
          <button className='bg-btnColor py-1 px-12 rounded-md'>Plunge bras</button>
          <button className='bg-btnColor py-1 px-12 rounded-md'>Gym sets</button>
          <button className='bg-btnColor py-1 px-12 rounded-md'>Pants</button>
        </div>
        {/* Product List */}
        <div className='m-20'>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
