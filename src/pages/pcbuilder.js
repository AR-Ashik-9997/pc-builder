import RootLayout from "@/components/Layout/RootLayout";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import cpu from "../assets/categories/cpu.png";
import motherboard from "../assets/categories/motherboard.png";
import ram from "../assets/categories/ram.png";
import power from "../assets/categories/power-supply.png";
import storage from "../assets/categories/hard-disk.png";
import monitor from "../assets/categories/monitor.png";
import Link from "next/link";

const categories = [
  {
    img: cpu,
    name: "CPU / Processor",
    link: "/chooseCategory/Processor",
  },
  {
    img: motherboard,
    name: "Motherboard",
    link: "/chooseCategory/Motherboard",
  },
  {
    img: ram,
    name: "RAM",
    link: "/chooseCategory/RAM",
  },
  {
    img: power,
    name: "Power Supply Unit",
    link: "/chooseCategory/PowerSupply",
  },
  {
    img: storage,
    name: "Storage Device",
    link: "/chooseCategory/Storage",
  },
  {
    img: monitor,
    name: "Monitor",
    link: "/chooseCategory/Monitor",
  },
];

const pcBuilder = () => {

  return (
    <section className="min-h-screen flex justify-center flex-col p-4">
      {categories.map((item, i) => (
        <div
          className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2"
          key={i}
        >
          <div className="w-full flex items-center gap-4 p-4">
            <Image src={item?.img} height={50} width={50} alt="abc" />
            <h1 className="font-medium">{item?.name}</h1>
          </div>
          <div className="p-4">
            <Link href={item?.link} className="px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium">
              select
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default pcBuilder;

pcBuilder.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};
