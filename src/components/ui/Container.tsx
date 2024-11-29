import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode; // Accept children for reusable layouts
  className?: string; // Allow additional Tailwind classes for customization
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
