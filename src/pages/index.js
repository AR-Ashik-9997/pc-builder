import RootLayout from "@/components/Layout/RootLayout";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import ProductCard from "@/components/ui/ProductCard";
import TopBanner from "@/components/ui/TopBanner";
import { SessionProvider } from "next-auth/react";

const index = ({ feateuredProducts }) => {
  return (
    <section>
      <TopBanner /> 
      <FeaturedCategories />    
      <ProductCard feateuredProducts={feateuredProducts} />
    </section>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-eight.vercel.app/limit-products");
  const data = await res.json(); 
   
  return {
    props: {
      feateuredProducts: data.data,
    },
  };
};
