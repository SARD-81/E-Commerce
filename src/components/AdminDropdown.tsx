import { useState, useRef, useEffect } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const AdminDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-4 text-[16px] font-normal leading-[24px] cursor-pointer"
      >
        <IoChevronDownSharp
          className={`text-lg mt-1 transform transition-transform duration-100 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        ادمین
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-[169px] h-[334px] bg-white rounded-lg border border-[#CED2D7] py-4 px-2 shadow-lg z-10">
          <ul className="flex flex-col gap-4">
            {[
              "داشبورد",
              "محصول جدید",
              "مدیریت کاربران",
              "سفارشات",
              "پروفایل",
              "خروج از حساب",
            ].map((item, index) => (
              <li
                key={index}
                className="px-2 py-2 rounded-md text-right text-[16px] font-normal leading-[21px] hover:bg-[#DB277714] hover:text-[#DB2777] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDropdown;
