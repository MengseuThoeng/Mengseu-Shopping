import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-gray-800 md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-gray-200 leading-tight font-medium">
              There a better way to order our products.
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-400 font-light tracking-wider leading-relaxed">
              Introducing our enhanced product sorting feature! Navigate
              effortlessly through categories, brands, and specifications
              tailored to your preferences. Say goodbye to endless scrolling
              with intuitive filters by price, popularity, and more. Elevate
              your shopping experience today!
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md  text-white border-2 border-gray-300">
                Get started
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-gray-200 text-gray-800 border-2 border-gray-500">
                Watch a Demo
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="https://pbs.twimg.com/media/FYR6n9IWYAAXkGR.jpg:large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
