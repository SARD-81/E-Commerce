import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import type { CategoryType } from "../types/Category";
import TextField from "@mui/material/TextField";

interface IShopFilterProps {
  onCategoryFilter: (categoryId: string) => void;
  onPriceFilter: (price: string) => void;
  onDeleteFilter: () => void;
  categories: CategoryType[];
}

const ShopPageFilter = ({
  onCategoryFilter,
  onPriceFilter,
  categories,
  onDeleteFilter,
}: IShopFilterProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    const regex = /^\d+$/;
    const isOnlyNumber = regex.test(str);
    if (isOnlyNumber || str === "") {
      setInputValue(e.target.value);
      onPriceFilter(e.target.value);
    }
  };
  return (
    <div className="w-1/4 px-12 pt-4 flex flex-col gap-4 bg-[#E6E8EB]">
      <div className="rounded-full flex items-center justify-center bg-white py-2 cursor-pointer">
        فیلتر برند
      </div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="apple"
          name="radio-buttons-group"
        >
          {categories.map((category) => (
            <FormControlLabel
              value={category._id}
              control={<Radio />}
              label={category.name}
              onClick={() => onCategoryFilter(category._id)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className="rounded-full flex justify-center items-center bg-white py-2 cursor-pointer">
        فیلتر قیمت{" "}
      </div>
      <TextField
        sx={{
          backgroundColor: "#fff",
        }}
        id="filled-hidden-label-small"
        value={inputValue}
        onChange={handlePriceChange}
        variant="filled"
        size="small"
        placeholder="قیمت را وارد نمایید "
      />
      <button
        onClick={onDeleteFilter}
        className="bg-[#E6E8EB] border-1 rounded-md border-gray-400 w-[90%] p-1 cursor-pointer"
      >
        حذف فیلترها
      </button>
    </div>
  );
};

export default ShopPageFilter;
