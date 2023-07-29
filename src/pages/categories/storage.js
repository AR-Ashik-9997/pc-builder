import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const storage = ({allStorageDevice}) => {
    return (
        <div>
           <ProductCard feateuredProducts={allStorageDevice}/>
        </div>
    );
};

export default storage;

storage.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/Storage");
      const data = await res.json(); 
       
      return {
        props: {
          allStorageDevice: data.data,
        },
      };
    };