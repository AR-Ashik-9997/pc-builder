import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const gpu = ({allGpu}) => {
    return (
        <div>
            <ProductCard feateuredProducts={allGpu}/>
        </div>
    );
};

export default gpu;
gpu.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/GPU");
      const data = await res.json(); 
       
      return {
        props: {
          allGpu: data.data,
        },
      };
    };