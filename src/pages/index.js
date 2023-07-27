import RootLayout from "@/components/Layout/RootLayout";
import TopBanner from "@/components/ui/TopBanner";
import { SessionProvider } from "next-auth/react";

const index = () => {
  return (
    <section>
      <TopBanner />
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

