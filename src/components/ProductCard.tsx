import * as React from "react";
import shoppingCard from "../assets/shop.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface ProductCardProps {
  productId: number | string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  onShowMore?: (productId: number | string) => void;
  onAddToBasket?: (productId: number | string) => void;
}

export default function ProductCard({
  productId,
  title,
  price,
  description,
  imageSrc,
  onShowMore,
  onAddToBasket,
}: ProductCardProps) {
  return (
    <div className="w-[384px]">
      <div className="rounded-t-md  flex items-center justify-center h-[170px] overflow-hidden">
        <img src={imageSrc} alt="product-picture" />
      </div>

      <div className="rounded-b-md bg-[#1F2937] p-4 gap-4 flex flex-col ">
        <div className="flex justify-between">
          <p className="text-[#DB2777]">{price} تومان</p>
          <p className="text-[#FFFFFF] text-xl">{title}</p>
        </div>
        <p className="text-[#9CA3AF] text-right">{description}</p>
        <div className=" flex justify-between ">
          <img
            src={shoppingCard}
            alt=""
            onClick={() => onAddToBasket?.(productId)}
          />
          <button
            className="!bg-[#DB2777] text-white"
            onClick={() => onShowMore?.(productId)}
          >
            <KeyboardBackspaceIcon /> مشاهده بیشتر{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
