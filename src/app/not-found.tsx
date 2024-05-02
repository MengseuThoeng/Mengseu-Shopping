import React from "react";

const notfound = () => {
  return (
    <section>
      <div className="flex h-screen flex-col bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              We can't find that page.
            </h1>

            <p className="mt-4 text-gray-100">
              Try searching again, or return home to start from the beginning.
            </p>

            <a
              href="/"
              className="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notfound;
