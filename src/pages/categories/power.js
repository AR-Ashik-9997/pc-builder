import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const power = ({allPowerSupply}) => {
    return (
        <div>
             <ProductCard feateuredProducts={allPowerSupply}/> 
        </div>
    );
};

export default power;

power.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/PowerSupply");
      const data = await res.json(); 
       
      return {
        props: {
          allPowerSupply: data.data,
        },
      };
    };