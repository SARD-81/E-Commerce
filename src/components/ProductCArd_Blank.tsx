interface ProductCard_BlankProps {
  productId: number | string;
  title: string;
  price: number;
  imageSrc: string;
  size: "small" | "large";
}
const ProductCArd_Blank = ({
  size = "small",
  title,
  price,
  imageSrc,
}: ProductCard_BlankProps) => {
  const imageSize: { width: number; height: number } =
    size === "small"
      ? { width: 350, height: 300 }
      : { width: 400, height: 345 };

  return (
    <div
      style={{
        width: imageSize.width,
      }}
    >
      <img
        className="rounded-xl mb-4"
        src={imageSrc}
        alt="product_card_blank"
        width={imageSize.width}
        height={imageSize.height}
      />
      <div className="flex justify-between items-center">
        <p className="font-bold">{title}</p>
        <div className="bg-[#831747] p-1 px-4 rounded-full">
          <p className="text-white">{price} تومان</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCArd_Blank;
