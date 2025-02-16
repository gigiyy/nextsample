import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 px-4 text-lg text-white bg-blue-500 border-none rounded cursor-pointer mr-2 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;