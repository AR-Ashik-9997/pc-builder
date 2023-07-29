import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const casing = ({allCasing}) => {
    return (
        <div>
            <ProductCard feateuredProducts={allCasing}/>
        </div>
    );
};

export default casing;
casing.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("http://localhost:5000/single-categories/Casing");
      const data = await res.json(); 
       
      return {
        props: {
          allCasing: data.data,
        },
      };
    };