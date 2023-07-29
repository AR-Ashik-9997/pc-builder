import RootLayout from '@/components/Layout/RootLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const monitor = ({allMonitor}) => {
    return (
        <div>
            <ProductCard feateuredProducts={allMonitor}/>
        </div>
    );
};

export default monitor;
monitor.getLayout = function getLayout(page) {
    return (
      <SessionProvider>
        <RootLayout>{page}</RootLayout>
      </SessionProvider>
    );
  };
  
  export const getStaticProps = async () => {
      const res = await fetch("http://localhost:5000/single-categories/Monitor");
      const data = await res.json(); 
       
      return {
        props: {
          allMonitor: data.data,
        },
      };
    };