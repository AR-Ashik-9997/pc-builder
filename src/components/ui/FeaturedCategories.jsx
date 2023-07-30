import Image from "next/image";
import React from "react";
import cpu from "../../assets/categories/cpu.png";
import motherboard from "../../assets/categories/motherboard.png";
import ram from "../../assets/categories/ram.png";
import power from "../../assets/categories/power-supply.png";
import storage from "../../assets/categories/hard-disk.png";
import monitor from "../../assets/categories/monitor.png";
import gpu from "../../assets/categories/graphic-card.png";
import mouse from "../../assets/categories/mouse.png";
import keyboard from "../../assets/categories/keyboard.png";
import casing from "../../assets/categories/case.png";
import { useRouter } from "next/router";


const categories = [
  {
    img: cpu,
    name: "CPU / Processor",
    link: "/categories/processor"
  },
  {
    img: motherboard,
    name: "Motherboard",
    link: "/categories/motherboard"
  },
  {
    img: ram,
    name: "RAM",
    link: "/categories/ram"
  },
  {
    img: power,
    name: "Power Supply Unit",
    link: "/categories/power"
  },
  {
    img: storage,
    name: "Storage Device",
    link: "/categories/storage"
  },
  {
    img: monitor,
    name: "Monitor",
    link: "/categories/monitor"
  },
  {
    img: gpu,
    name: "GPU",
    link: "/categories/gpu"
  },
  {
    img: mouse,
    name: "Mouse",
    link: "/categories/mouse"
  },
  {
    img: keyboard,
    name: "Keyboard",
    link: "/categories/keyboard"
  },
  {
    img: casing,
    name: "Casing",
    link: "/categories/casing"
  },
];
const FeaturedCategories = () => {
  const router =useRouter();
  return (
    <section>
      <div className="py-8">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          Featured Categories
        </h1>
        <p className="text-center">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4 p-4 w-3/4 mx-auto">
        {categories.map((item, i) => (
          <button onClick={()=>router.push(item?.link)} key={i} className="active:scale-95 duration-200">
            <div
              className="w-full mx-auto bg-white rounded-xl shadow-xl overflow-hidden"              
            >
              <div className="p-4">
                <Image
                  src={item?.img}
                  alt="cpu"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {item?.name}
                </h2>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
