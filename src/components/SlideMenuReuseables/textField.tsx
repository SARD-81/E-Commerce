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
    <div className="flex flex-col gap-1 w-[531px] " dir="rtl">
      <label htmlFor={name} className="text-right text-[16px] font-normal">
        {label}
      </label>
      <input
        id={name} 
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#141516] border-[#3F4043] rounded-[8px] h-[42px] px-[9px] pt-2.5 pb-[11px] text-right text-white text-[16px] placeholder-[#454F5B]
        focus:outline-none focus:border-[2px] focus:border-[#078DEE] 
        disabled:bg-[#3F4043] disabled:border-[#3F4043] disabled:placeholder-[#9CA3AF] disabled:text-[#9CA3AF]"
      />
    </div>
  );
};

export default TextField;
