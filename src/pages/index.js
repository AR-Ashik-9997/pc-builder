import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const index = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-5">Welcome</h1>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
