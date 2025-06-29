import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";
import { useState } from "react";

// Sample data - you can replace this with your own data or fetch from an API
const productData = {
  images: [
    "https://placehold.co/800x600/f0f0f0/333?text=iPhone+14+Pro",
    "https://placehold.co/800x600/e0e0e0/333?text=Side+View",
    "https://placehold.co/800x600/d0d0d0/333?text=Back+View",
  ],
  title: "Apple iPhone 14 Pro",
  price: "۱۵,۵۰۰,۰۰۰ تومان",
  brand: "اپل",
  rating: "۵",
  quantity: "۵۲",
  lastUpdated: "چند لحظه قبل",
  reviews: "۴۲۰۲",
  stock: "۱۰",
  description:
    "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. صفحه نمایش با فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه گانه ...",
};

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center font-sans w-3/5">
      <div dir="rtl" className="w-full overflow-hidden">
        <div className="relative shadow-md">
          <img
            src={productData.images[currentIndex]}
            alt="Product"
            className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out rounded-lg"
            style={{ minHeight: "400px" }}
          />

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors focus:outline-none"
          >
            <ArrowBackIosSharpIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors focus:outline-none"
          >
            <ArrowForwardIosSharpIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <div className="pt-6 flex gap-6">
          <div className="flex flex-col w-1/2 justify-between items-start mb-4 gap-y-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
              {productData.title}
            </h1>
            <p className="text-2xl font-bold text-left text-gray-900">
              {productData.price}
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              {productData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 w-1/2 gap-y-4  text-sm text-gray-600 mb-6">
            <p>
              <StorefrontSharpIcon /> برند : {productData.brand}
            </p>
            <p>
              <StarPurple500SharpIcon /> امتیاز : {productData.rating}{" "}
            </p>
            <p>
              <LocalGroceryStoreSharpIcon /> تعداد : {productData.quantity}
            </p>
            <p>
              <WatchLaterSharpIcon /> زمان بروزرسانی : {productData.lastUpdated}{" "}
            </p>
            <p>
              <QuestionAnswerSharpIcon /> نظرات : {productData.reviews}{" "}
            </p>
            <p>
              <WidgetsSharpIcon /> موجودی : {productData.stock}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
