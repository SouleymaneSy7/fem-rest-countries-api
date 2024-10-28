import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Buttons from "./Buttons";
import VisuallyHidden from "./visuallyHidden";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const root = window.document.documentElement;

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      root.classList.add("dark");
      setIsDarkMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

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

        <Buttons
          type={"button"}
          className="flex items-center gap-3"
          onClick={handleClick}
        >
          {isDarkMode ? (
            <React.Fragment>
              <i className="fa-solid fa-moon | text-color-text"></i>
              <VisuallyHidden>Toggle color theme to light</VisuallyHidden>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <i className="fa-regular fa-moon | text-color-text"></i>
              <VisuallyHidden>Toggle color theme to dark</VisuallyHidden>
            </React.Fragment>
          )}
          <span className="font-fw-semi-bold ">Dark Mode</span>
        </Buttons>
      </nav>
    </header>
  );
};

export default Header;
