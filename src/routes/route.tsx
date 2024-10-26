import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import CountryPage from "../pages/CountryPage";
import ErrorsPage from "../pages/ErrorsPage";

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:countryName"} element={<CountryPage />} />
        <Route path={"*"} element={<ErrorsPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default RouterConfig;
