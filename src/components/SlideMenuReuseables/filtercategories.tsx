import React from 'react';

interface CaterogyPropsType { 
  texts: string[];
}


const FilterCategories: React.FC<CaterogyPropsType> = (props) => {
  return(
    <div className='w-[240px] flex flex-col gap-2'>
      <div className='heading w-[240px] h-10 bg-black text-white text-center text-[16px] font-normal rounded-full py-2 px-[51.97px]'>فیلتر دسته بندی</div>
      <ul className='container w-[240px] px-5 pt-5 pb-7 flex flex-col gap-2'>
        
          {props.texts.map((item, index) => (
            <li key={index} className='flex gap-2'>
              <input id={item} name={item} type="checkbox" />
              <label htmlFor={item} className='text-[14px] font-normal'>{item}</label>
            </li>
          ))}     
      </ul> 
    </div>
  )
} 



export default FilterCategories;
