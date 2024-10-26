import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Buttons from "./Buttons";

const Header: React.FC = () => {
  return (
    <header className="py-6 md:py-4 bg-color-elements shadow-lg">
      <nav className="flex items-center justify-between container">
        <Link to="/">
          <Title
            level="h1"
            className="text-fs-logo font-fw-bold text-color-text"
          >
            Where in the world?
          </Title>
        </Link>

        <Buttons type={"button"} className="flex items-center gap-3">
          <i className="fa-regular fa-moon"></i>
          <span className="font-fw-semi-bold ">Dark Mode</span>
        </Buttons>
      </nav>
    </header>
  );
};

export default Header;
