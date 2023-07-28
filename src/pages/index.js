import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import TopBanner from "@/components/ui/TopBanner";
import { SessionProvider } from "next-auth/react";

const index = ({ feateuredProducts }) => {
  return (
    <section>
      <TopBanner />     
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
  const res = await fetch("http://localhost:3000/api/pcbuilderapi");
  const data = await res.json();  
  return {
    props: {
      feateuredProducts: data.data,
    },
  };
};
