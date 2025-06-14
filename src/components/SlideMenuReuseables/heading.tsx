import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-black text-white cursor-pointer rounded-full px-4 py-1 text-sm font-medium text-center inline-block ${className}`}
      dir="rtl"
    >
      {children}
    </span>
  );
};

export default Heading;
