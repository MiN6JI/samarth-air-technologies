import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "gradient" | "solid" | "outline" | "icon";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const Button = ({
  children,
  type = "button",
  variant = "solid",
  onClick,
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  const variants = {
    gradient:
      "bg-gradient-to-r from-[#FFB000] to-[#FF7A00] text-white hover:opacity-90 shadow-lg",

    solid: "bg-[#0F172A] text-white hover:bg-[#1E293B]",

    outline:
      "border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white",

    icon: "bg-[#0F172A] text-white hover:bg-[#1E293B] inline-flex items-center gap-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl
        px-6 py-3
        font-medium
        transition-all duration-300
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
