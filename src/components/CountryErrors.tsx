import React from "react";

const CountryErrors: React.FC = () => {
  return (
    <React.Fragment>
      <main className="grid min-h-full place-items-center bg-color-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-fs-logo font-fw-semi-bold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-fs-errors-title font-fw-bold tracking-tight text-color-errors sm:text-7xl">
            Country not found!
          </h1>

          <p className="mt-6 text-pretty text-fs-logo font-fw-regular text-color-input-text sm:text-xl/8">
            Sorry, we couldn't find the country you were looking for. try with
            another name.
          </p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default CountryErrors;
