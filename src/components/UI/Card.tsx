import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-xl border bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
