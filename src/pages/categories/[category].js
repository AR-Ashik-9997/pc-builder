/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/components/Layout/RootLayout";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const category = ({ singleCategory }) => {

  return (
    <section className="pt-24">
      <div className="pb-24">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          Featured {singleCategory[0].category}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
        {singleCategory.map(
          (item, i) => (            
            (
              <div
                className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
                key={i}
              >
                <Link href={`products/${item?._id}`}>
                  {/* <div>
                <Image
                  src={item?.image}
                  alt="Product Image"
                  height={100}
                  width={350}
                />
              </div> */}

                  <div className="p-4 w-full">
                    <h2 className="text-xl font-semibold mb-2">
                      {item?.productName}
                    </h2>
                    <p className="text-gray-500 text-sm mb-2">
                      {item?.category}
                    </p>
                    <p className="text-green-600 font-bold text-lg mb-2">
                      {item?.Price}
                    </p>
                    <p className="mb-2">
                      <span className="text-gray-600">{item?.status}</span>
                    </p>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                      <span className="text-gray-600">{item?.rating}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
};

export default category;

category.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/all-categories");
  const categories = await res.json();
  const paths = categories.data.map((item) => ({
    params: { category: item.category },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    ` http://localhost:5000/single-categories/${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      singleCategory: data.data,
    },
  };
};
