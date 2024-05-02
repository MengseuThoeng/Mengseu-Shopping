import React from "react";

const Page = () => {
  return (
    <section className="bg-gray-800 h-screen flex justify-center items-center">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-100 border-b-2 border-blue-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-center sm:text-left">
              About <span className="text-blue-500">Our Company</span>
            </h2>
            <p className="text-gray-100 text-center sm:text-left">
              At SEU SHOPPING, we&apos;re more than just an online marketplace.
              We&apos;re a community of passionate individuals dedicated to
              providing you with the best shopping experience possible. With a
              diverse range of products and a commitment to quality, we strive
              to be your go-to destination for all your shopping needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
