/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const dropdownItems = [
    { id: 1, title: "CPU / Processor", link: "/categories/processor" },
    { id: 2, title: "Motherboard", link: "/categories/motherboard" },
    { id: 3, title: "RAM", link: "/categories/ram" },
    { id: 4, title: "Power Supply Unit", link: "/categories/power" },
    { id: 5, title: "Storage Device", link: "/categories/storage" },
    { id: 6, title: "Monitor", link: "/categories/monitor" },
    { id: 7, title: "GPU", link: "/categories/gpu" },
    { id: 8, title: "Mouse", link: "/categories/mouse" },
    { id: 9, title: "Keyboard", link: "/categories/keyboard" },
    { id: 10, title: "Casing", link: "/categories/casing" },
  ];

  return (
    <div className="relative z-10" ref={dropdownRef}>
      <h1
        className="text-black lg:mx-4 cursor-pointer hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 lg:text-xl"
        onMouseEnter={openDropdown}
      >
        Categories
      </h1>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-44 bg-white border border-gray-300 rounded-lg shadow-lg">
          {dropdownItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
