import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="text-textColor2">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Luxury shapewear
          </h1>
          <p className="text-lg md:text-2xl">Comfortable fitted underwears</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
