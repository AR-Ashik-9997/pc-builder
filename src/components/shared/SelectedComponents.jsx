import Image from "next/image";
import close from "../../assets/categories/close.png";
import { useDispatch } from "react-redux";
import { setMonitor, setMotherboard, setPowerSupply, setProcessor, setRAM, setStorage } from "@/redux/feature/pcbuilder/pcbuilderSlice";

const SelectedComponents = ({ selectData }) => {
  const dispatch = useDispatch();
  const handleClose = (queryName) => {
    console.log(queryName);
    if (queryName === "Processor") {
      dispatch(setProcessor({}));
    }
    else if (queryName === "Motherboard") {
      dispatch(setMotherboard({}));
    }
    else if (queryName === "RAM") {
      dispatch(setRAM({}));
    }
    else if (queryName === "PowerSupply") {
      dispatch(setPowerSupply({}));
    }
    else if (queryName === "Storage") {
      dispatch(setStorage({}));
    }
    else if (queryName === "Monitor") {
      dispatch(setMonitor({}));
    }
  };
  return (
    <div className="w-full flex items-center">
      <div className="w-full flex items-center gap-4 p-4">
        <Image src={selectData?.image} height={50} width={50} alt="abc" />
        <h1 className="font-medium">{selectData?.productName}</h1>
      </div>
      <button
        onClick={() => handleClose(selectData?.queryName)}
        className=" active:scale-95 duration-200 p-4"
      >
        <Image src={close} alt="close" height={30} width={30} />
      </button>
    </div>
  );
};

export default SelectedComponents;
