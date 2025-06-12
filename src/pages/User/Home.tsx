import ProductCArd_Blank from "../../components/ProductCArd_Blank";
import pic from "../../assets/iphone-14-pro-model-unselect-gallery-1-202209.jpg";
import ProductSlider from "../../components/ProductSlider";

const Home = () => {
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
