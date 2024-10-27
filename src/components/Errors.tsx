import React from "react";
import { Link } from "react-router-dom";

const Errors: React.FC = () => {
  return (
    <React.Fragment>
      <main className="grid min-h-full place-items-center bg-color-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-fs-logo font-fw-semi-bold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-fs-errors-title font-fw-bold tracking-tight text-color-errors sm:text-7xl">
            Page not found
          </h1>

          <p className="mt-6 text-pretty text-fs-logo font-fw-regular text-color-input-text sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-color-elements px-3.5 py-2.5 text-fs-homepage font-fw-semi-bold  text-color-text shadow-sm hover:bg-color-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Errors;
