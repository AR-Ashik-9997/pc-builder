import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import { SessionProvider } from "next-auth/react";
import React from "react";

const processor = ({allProcessor}) => {
  return (
    <div>
      <ProductCard feateuredProducts={allProcessor}/>
    </div>
  );
};

export default processor;

processor.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/single-categories/Processor");
    const data = await res.json(); 
     
    return {
      props: {
        allProcessor: data.data,
      },
    };
  };