import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

const Badge: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  className = '',
}) => {
  const baseStyles = 'rounded-full py-3 px-6 text-white text-lg font-bold transition duration-300';
  const variantStyles = variant === 'primary'
    ? 'bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800'
    : 'bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
      dir="rtl"
    >
      {children}
    </button>
  );
};

export default Badge;
