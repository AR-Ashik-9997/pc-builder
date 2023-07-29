import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const motheboard = ({allMotherboard}) => {
    console.log(allMotherboard);
    return (
        <div>
          <ProductCard feateuredProducts={allMotherboard}/>
        </div>
    );
};

export default motheboard;

motheboard.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/Motherboard");
      const data = await res.json(); 
      return {
        props: {
          allMotherboard: data.data,
        },
      };
    };