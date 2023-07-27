import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const index = () => {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
