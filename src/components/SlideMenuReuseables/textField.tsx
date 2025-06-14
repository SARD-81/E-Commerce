import React from 'react';

interface TextFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, placeholder, name }) => {
  return (
    <div className="flex flex-col gap-1 w-[531px]" dir="rtl">
      <label htmlFor={name} className="text-right text-sm font-medium">
        {label}
      </label>
      <input
        id={name} 
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-right text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default TextField;
