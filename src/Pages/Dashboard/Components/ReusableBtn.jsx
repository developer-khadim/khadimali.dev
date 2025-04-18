import React from "react";
import { Link } from "react-router-dom";

const ReusableBtn = ({
  as,
  isLoading,
  loadingText,
  type = "button", // Default to button type
  onClick,
  icon,
  text,
  className = "",
  disabled,
  isMr = true, // Default to true for margin-right on icon
  titleText,
  to,
  target,
  ...props
}) => {
  // Base styles for the button/link
  const baseStyles = `
    relative flex items-center px-2 py-2 text-sm rounded-lg border-2 border-indigo-600
    shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
    dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
    transition-all duration-300 ease-in-out select-none
    dark:bg-gray-800 dark:text-white
  `;

  // Enabled state styles
  const enabledStyles = `
    hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
    dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
    hover:border-indigo-700 dark:hover:border-indigo-500
  `;

  // Disabled state styles
  const disabledStyles = `
    opacity-50 cursor-not-allowed border-gray-400
    shadow-[4px_4px_0px_0px_rgba(67,56,202,0.3)]
    dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.3)]
  `;

  // Combine styles based on disabled state
  const combinedStyles = `
    ${baseStyles}
    ${disabled ? disabledStyles : enabledStyles}
    ${className}
  `.trim();

  const ButtonContent = (
    <>
      {icon && <span className={isMr === false ? "" : "mr-2"}>{icon}</span>}
      {isLoading ? loadingText : text}
    </>
  );

  // Handle Link case
  if (as === Link && to) {
    // If disabled, render a span instead of a Link to prevent navigation
    if (disabled) {
      return (
        <span className={combinedStyles} title={titleText} {...props}>
          {ButtonContent}
        </span>
      );
    }

    return (
      <Link
        to={to}
        className={combinedStyles}
        target={target}
        title={titleText}
        {...props}
      >
        {ButtonContent}
      </Link>
    );
  }

  // Handle button case
  return (
    <button
      type={type}
      onClick={onClick}
      title={titleText}
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {ButtonContent}
    </button>
  );
};

export default ReusableBtn;
