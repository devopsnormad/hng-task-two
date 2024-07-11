import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-footerBackground p-8'>
      <div className='max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        
        {/* Logo and Description */}
        <div className='flex flex-col items-start'>
          <h1 className='text-2xl font-bold text-amber-950 mb-2'>N A K E D</h1>
          <span className='text-text-amber-950 mb-4'>Luxury shapewear</span>
          <div className='flex space-x-4'>
            <div className='p-2 rounded-full outline outline-1 outline-outlineColor border'>
              <FaLinkedinIn className='text-xl text-amber-950' />
            </div>
            <div className='p-2 rounded-full outline outline-1 outline-outlineColor border'>
              <FaFacebookF className='text-xl text-amber-950' />
            </div>
            <div className='p-2 rounded-full outline outline-1 outline-outlineColor border'>
              <FaInstagram className='text-xl text-amber-950' />
            </div>
            <div className='p-2 rounded-full outline outline-1 outline-outlineColor border'>
              <FaXTwitter className='text-xl text-amber-950' />
            </div>
            <div className='p-2 rounded-full outline outline-1 outline-outlineColor border'>
              <FaYoutube className='text-xl text-amber-950' />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h1 className='text-lg font-semibold mb-4'>Menu</h1>
          <ul className='space-y-2 text-outlineColor'>
            <li>Home</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className='text-lg font-semibold mb-4'>Quick links</h1>
          <ul className='space-y-2 text-outlineColor'>
            <li>Shipping Policies</li>
            <li>Return Policy</li>
            <li>Our Sales Outlets</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h1 className='text-lg font-semibold mb-4'>Download App</h1>
          <ul className='space-y-2 text-outlineColor'>
            <li>Download on Android</li>
            <li>Download on IOS</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-outlineColor mt-8 pt-4 flex justify-between'>
        <p className='text-outlineColor text-start'>
         Copyright © 2024 NAKED. All Rights Reserved. <a href="#" className='underline'>Privacy & Cookie Policy</a>
        </p>
        <p className='text-outlineColor text-end'>
          Powered by NAKED
        </p>
      </div>
    </div>
  );
}

export default Footer;
