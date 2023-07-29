import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const mouse = ({allMouse}) => {
    return (
        <div>
           <ProductCard feateuredProducts={allMouse}/>
        </div>
    );
};

export default mouse;

mouse.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("http://localhost:5000/single-categories/Mouse");
      const data = await res.json(); 
       
      return {
        props: {
          allMouse: data.data,
        },
      };
    };