import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import pic from "../../assets/appleIphone.jpg";
import ProductCArd_Blank from "../../components/ProductCArd_Blank";
import ProductSlider from "../../components/ProductSlider";
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const successMessage = location.state?.message;
    if (!successMessage) return;
    toast.success(successMessage, { toastId: "Login-success" });
  }, [location.state]);
  return (
    <div className="">
      <div className="flex mb-10 w-full justify-between">
        <div className="flex justify-around w-2/5">
          <div>
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            {/* <ImgMediaCard />
            <ImgMediaCard /> */}
          </div>
          <div>
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            {/* <ImgMediaCard />
            <ImgMediaCard /> */}
          </div>
        </div>
        <ProductSlider />
      </div>
      <div className="">
        <div className=" w-full flex justify-between items-center pb-4 ">
          <p className="text-[40px] font-normal">محصولات ویژه</p>
          <p className="bg-[#DB2777] px-3 py-1 rounded-full text-white">
            فروشگاه
          </p>
        </div>
        <div className=" flex flex-wrap gap-4 justify-between">
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
