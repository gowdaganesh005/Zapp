import { type JSX } from "react";

export function Card({
  className,
  children,
  
}: {
  className?: string;
  children:   any;
  
}): JSX.Element {
  
  return (
    
    <>
    
      <div className={`p-4 shadow-lg rounded-2xl ${className}`}>
      {children}
      </div>
      
    </>
    
  );
}
