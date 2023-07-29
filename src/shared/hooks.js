import { useState, useEffect } from "react";

const useCheckAllObjectsFilled = (objects) => {
  const [isAllFilled, setIsAllFilled] = useState(false);

  useEffect(() => {
    if (!Array.isArray(objects) || objects.length !== 6) {
      setIsAllFilled(false);
      return;
    }

    const areAllFilled = !objects.some((obj) => Object.keys(obj).length === 0);
    setIsAllFilled(areAllFilled);
  }, [objects]);

  return isAllFilled;
};

export default useCheckAllObjectsFilled;
