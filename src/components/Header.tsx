import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Buttons from "./Buttons";

const Header: React.FC = () => {
  return (
    <header className="py-5 border-b border-b-color-text">
      <nav className="flex items-center justify-between container">
        <Link to="/">
          <Title level="h1">Where in the world?</Title>
        </Link>

        <Buttons type={"button"} className="flex items-center gap-3">
          <i className="fa-regular fa-moon"></i>
          <span>Dark Mode</span>
        </Buttons>
      </nav>
    </header>
  );
};

export default Header;
