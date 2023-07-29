import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderCard from "@/components/ui/PcBuilderCard";
import { SessionProvider } from "next-auth/react";
import React from "react";

const choosepcbuilder = ({ allProduct }) => {
  return (
    <div>
      <PcBuilderCard chooseCategory={allProduct}/>
    </div>
  );
};

export default choosepcbuilder;

choosepcbuilder.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-eight.vercel.app/single-categories/${params.choosepcbuilder}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProduct: data.data,
    },
  };
};
