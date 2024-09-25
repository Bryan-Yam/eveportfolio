import React from "react";
import { Link } from "react-router-dom";

function Header({
  primaryColorClass,
  secondaryColorClass,
  backgroundColorClass,
}) {
  return (
    <header
      className={`py-8 md:py-12 lg:py-16 px-10 md:px-16 lg:px-24 grid grid-cols-2 justify-between ${backgroundColorClass}`}>
      <h1
        className={`font-cormorant text-2xl md:text-4xl lg:text-7xl font-bold ${primaryColorClass}`}>
        <Link to="/" className={`inline-block`}>
          Evelyn Zheng
        </Link>
      </h1>

      <div
        className={`flex gap-4 lg:gap-16 items-center md:text-2xl lg:text-3xl justify-end font-cormorant ${secondaryColorClass}`}>
        <Link to="/fencing" className="hover:underline">
          Fencing
        </Link>
        <Link to="/speaking" className="hover:underline">
          Speaking
        </Link>
        <Link to="/modelling" className="hover:underline">
          Modelling
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
