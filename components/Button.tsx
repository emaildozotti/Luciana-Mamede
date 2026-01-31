import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidthMobile?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidthMobile = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1";
  
  const variants = {
    primary: "bg-moss-700 text-white hover:bg-moss-800 border-2 border-transparent",
    secondary: "bg-earth-600 text-white hover:bg-earth-700 border-2 border-transparent",
    outline: "bg-transparent text-moss-800 border-2 border-moss-700 hover:bg-moss-50",
  };

  const mobileStyles = fullWidthMobile ? "w-full md:w-auto" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${mobileStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;