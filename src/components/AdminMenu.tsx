import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-2xl text-black cursor-pointer"
      >
        <FiMenu />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[169px] bg-white rounded-lg border border-[#CED2D7] py-4 px-2 shadow-lg z-10">
          <ul className="flex flex-col gap-4">
            {["داشبورد", "محصول جدید", "مدیریت کاربران", "سفارشات"].map(
              (item, index) => (
                <li
                  key={index}
                  className="px-2 py-2 rounded-md text-right text-[16px] font-normal leading-[21px] hover:bg-[#DB277714] hover:text-[#DB2777] cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
