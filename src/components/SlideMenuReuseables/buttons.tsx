import React,{useState} from 'react';
import { Heart } from "lucide-react";


interface DynamicButtonProps {
  text?: string;
  variant?: 'btn1' | 'btn2' | 'heart-btn';
  onClick?: () => void;
  locale?: 'fa-IR' | 'en-US'; // default to Persian
}

const Buttons: React.FC<DynamicButtonProps> = ({
  text,
  variant = 'btn1',
  onClick,
  locale = 'fa-IR',
}) => {

  // For heart button
  const [liked, setLiked] = useState(false);

  if (variant === 'heart-btn') {
    return (
      <button
        onClick={() => setLiked(!liked)}
        className="w-8 h-8 flex items-center justify-center transition-colors duration-300"
        aria-label="like button"
      >
        <Heart
          size={20}
          fill={liked ? '#DB2777' : 'none'}
          color={liked ? '#DB2777' : '#DFE3E8'}
        />
      </button>
    );
  }


  // checks if text starts with a number or has a number before a suffix like "تومان"
  const numberMatch = text.match(/^(\d+)(.*)/); 

  const isNumeric = !!numberMatch;
  const rawNumber = numberMatch?.[1];
  const suffix = numberMatch?.[2] || '';

  let formattedText = text;

  if (isNumeric && rawNumber) {
    const number = parseInt(rawNumber, 10);
    formattedText = `${number.toLocaleString(locale)}${suffix}`;
  }

  // Styles
  let className = 'text-white cursor-pointer text-center rounded-full font-normal';
  let icon = null;

  if (isNumeric) {
    if (variant === 'btn1') {
      className += ' bg-[#831747] text-[11px] w-[73px] h-[20px] px-[8px] py-[2px]';
    } else if (variant === 'btn2') {
      className += ' bg-[#831747] text-xs w-[82px] h-[24px] px-[10px] py-[2px]';
    }
  } else if (text === 'فروشگاه') { 
    className += ' bg-[#DB2777] hover:bg-[#831747] w-[135px] h-[48px] px-[32px] py-[8px] font-bold text-[20px]';
  } else if (text === 'مشاهده بیشتر') {
    className += ' bg-[#DB2777] hover:bg-[#831747] text-[14px] w-[132px] h-[36px] rounded-lg flex justify-center items-center flex-row-reverse gap-2 px-[12px] py-[8px]';
    icon = <span className="text-lg">←</span>;
  } 

  return ( 
    <button dir="rtl" className={className} onClick={onClick}>
      {icon}
      {formattedText}
    </button>
  );
};

export default Buttons;
