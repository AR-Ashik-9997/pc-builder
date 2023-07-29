import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  setMonitor,
  setMotherboard,
  setPowerSupply,
  setProcessor,
  setRAM,
  setStorage,
} from "@/redux/feature/pcbuilder/pcbuilderSlice";

const PcBuilderCard = ({ chooseCategory }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToBuilder = (item) => {
    if (item?.queryName === "Processor") {
      dispatch(setProcessor(item));
      router.push("/pcbuilder");
    } else if (item?.queryName === "Motherboard") {
      dispatch(setMotherboard(item));
      router.push("/pcbuilder");
    } else if (item?.queryName === "RAM") {
      dispatch(setRAM(item));
      router.push("/pcbuilder");
    } else if (item?.queryName === "PowerSupply") {
      dispatch(setPowerSupply(item));
      router.push("/pcbuilder");
    } else if (item?.queryName === "Storage") {
      dispatch(setStorage(item));
      router.push("/pcbuilder");
    } else if (item?.queryName === "Monitor") {
      dispatch(setMonitor(item));
      router.push("/pcbuilder");
    }
  };
  return (
    <section className="pt-24">
      <div className="py-8">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          Featured Pc-Bulder Product
        </h1>
        <p className="text-center">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-4/5 mx-auto gap-4 xl:p-4">
        {chooseCategory.map((item, i) => (
          <div
            className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            key={i}
          >
            <div className="p-4 md:h-72 lg:h-96">
              <Image
                src={item?.image}
                alt="Product Image"
                height={900}
                width={900}
              />
            </div>

            <div className="p-4 w-full">
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {item?.productName}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  <span className="font-medium">Category:</span>{" "}
                  {item?.category}
                </p>
                <p className="text-green-600 font-bold text-lg mb-2">
                  <span>Price: </span> {item?.price} Tk
                </p>
                <p className="mb-2">
                  <span className="text-gray-600">{item?.status}</span>
                </p>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <span className="text-gray-600">{item?.rating}</span>
                </div>
              </div>

              <div className="py-4 flex justify-center items-center">
                <button
                  onClick={() => handleAddToBuilder(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-3/4 active:scale-95 duration-200"
                >
                  Add To Builder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PcBuilderCard;
