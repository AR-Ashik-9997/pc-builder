/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/components/Layout/RootLayout";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import cpu from "../assets/categories/cpu.png";
import board from "../assets/categories/motherboard.png";
import ramslot from "../assets/categories/ram.png";
import powerSupplyUnit from "../assets/categories/power-supply.png";
import storageDevice from "../assets/categories/hard-disk.png";
import monitorLed from "../assets/categories/monitor.png";
import { useSelector } from "react-redux";
import SelectedComponents from "@/components/shared/SelectedComponents";
import useCheckAllObjectsFilled from "@/shared/hooks";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const pcBuilder = () => {
  const processor = useSelector((state) => state.pcBuilder.Processor);
  const motherboard = useSelector((state) => state.pcBuilder.Motherboard);
  const RAMS = useSelector((state) => state.pcBuilder.RAM);
  const PowerSupply = useSelector((state) => state.pcBuilder.PowerSupply);
  const Storage = useSelector((state) => state.pcBuilder.Storage);
  const Monitor = useSelector((state) => state.pcBuilder.Monitor);
  const arrayObject = [
    processor,
    motherboard,
    RAMS,
    PowerSupply,
    Storage,
    Monitor,
  ];
  const router = useRouter();
  const isEmptyObjects = useCheckAllObjectsFilled(arrayObject);
  const handleBuild = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <section className="min-h-screen flex justify-center flex-col p-4">
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={cpu} height={50} width={50} alt="abc" />
              <h1 className="font-medium">Processor</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/Processor")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(processor).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(processor).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={processor} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={board} height={50} width={50} alt="abc" />
              <h1 className="font-medium">Motherboard</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/Motherboard")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(motherboard).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(motherboard).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={motherboard} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={ramslot} height={50} width={50} alt="abc" />
              <h1 className="font-medium">RAM</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/RAM")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(RAMS).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(RAMS).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={RAMS} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={powerSupplyUnit} height={50} width={50} alt="abc" />
              <h1 className="font-medium">Power Supply Unit</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/PowerSupply")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(PowerSupply).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(PowerSupply).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={PowerSupply} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={storageDevice} height={50} width={50} alt="abc" />
              <h1 className="font-medium">storage Device</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/Storage")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(Storage).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(Storage).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={Storage} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 2xl:w-1/4 flex items-center mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-2">
        <div className="w-full">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-4 p-4">
              <Image src={monitorLed} height={50} width={50} alt="abc" />
              <h1 className="font-medium">Monitor</h1>
            </div>
            <div className="p-4">
              <button
                onClick={() => router.push("/chooseCategory/Monitor")}
                className={`px-4 py-1 bg-teal-600 rounded-xl text-md text-white active:scale-95 duration-200 font-medium ${
                  Object.keys(Monitor).length > 0 ? "hidden" : ""
                }`}
              >
                select
              </button>
            </div>
          </div>
          {Object.keys(Monitor).length > 0 ? (
            <>
              <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded mb-4 dark:bg-gray-500" />
              <SelectedComponents selectData={Monitor} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        <button
          onClick={handleBuild}
          disabled={!isEmptyObjects}
          className="px-4 py-3 bg-teal-500 w-1/5 active:scale-95 duration-200 text-white font-medium rounded-xl disabled:active:scale-100 disabled:duration-0"
        >
          Complete Build
        </button>
      </div>
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
