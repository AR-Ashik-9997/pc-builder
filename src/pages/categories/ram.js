import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const ram = ({allRam}) => {
    return (
        <div>
             <ProductCard feateuredProducts={allRam}/>
        </div>
    );
};

export default ram;
ram.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/RAM");
      const data = await res.json(); 
       
      return {
        props: {
          allRam: data.data,
        },
      };
    };