// src/Button.js
import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  to, // New prop to specify the link
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none transition duration-300";
  const variantStyles = {
    primary:
      "bg-background_purple text-black hover:bg-accent_purple border-2 border-background_purple font-nunito",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // Check if 'to' prop is provided to render Link
  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {label}
      </Link>
    );
  }

  // Render button if 'to' prop is not provided
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
