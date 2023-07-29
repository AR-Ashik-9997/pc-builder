import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const keyboard = ({allKeyboard}) => {
    return (
        <div>
           <ProductCard feateuredProducts={allKeyboard} />
        </div>
    );
};

export default keyboard;
keyboard.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("https://pc-builder-server-eight.vercel.app/single-categories/Keyboard");
      const data = await res.json(); 
       
      return {
        props: {
          allKeyboard: data.data,
        },
      };
    };