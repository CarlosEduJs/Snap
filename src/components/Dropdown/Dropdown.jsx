import { useState, useRef, useEffect } from "react";

export default function Dropdown({ children, isHover = false }) {
  const [setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{  top: 10 }}
      className={`absolute ${
        isHover ? "hidden group-hover:block" : "hidden"
      } mt-2 ml-4 w-48 left-[-20px]  bg-white rounded-md shadow-2xl z-10`}
    >
      {children}
    </div>
  );
}
