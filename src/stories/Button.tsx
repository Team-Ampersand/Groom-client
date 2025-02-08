import React from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, size = "medium", label, ...props }: ButtonProps) => {
  const baseStyles = "rounded-lg font-semibold";
  const sizeStyles = {
    small: "px-4 py-1.5 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg",
  };
  const colorStyles = primary
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button type="button" className={`${baseStyles} ${sizeStyles[size]} ${colorStyles}`} {...props}>
      {label}
    </button>
  );
};
