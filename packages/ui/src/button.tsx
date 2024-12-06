"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children:   ReactNode;
  className?: string;
  onClick:    ()=>void;
  type:       any
  
  
}

export const ButtonType = {
  transparent: "border border-transparent hover:bg-primary-400 hover:border-primary-500",
  fill: "bg-gradient-to-l from-primary-600 via-primary-700 to-primary-900 text-white font-medium [background-size:200%] animate-moving-gradient hover:border-primary",
};






export const Button = ({ children, className,onClick,type }: ButtonProps) => {
  return ( 
    <div className={`px-1  flex justify-center ${className}`}>
      <button className={`${className} ${type}   p-1  rounded-md border-collapse`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
