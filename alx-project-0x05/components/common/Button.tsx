import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white bg-${buttonBackgroundColor}-600 hover:bg-${buttonBackgroundColor}-700 transition-all text-sm md:text-base`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
