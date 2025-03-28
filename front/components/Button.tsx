import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Define the button types
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = "button", children, className }) => {
  return (
    <button type={type} className={`p-2 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;