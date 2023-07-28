/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ feateuredProducts }) => {
  return (
    <section className="pt-24">
      <div className="pb-24">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          Featured Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
        {feateuredProducts.map((item, i) => (
          <div
            className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            key={i}
          >
            <Link href={`products/${item?._id}`}>
              <div>
                <Image
                  src={item?.image}
                  alt="Product Image"                 
                  height={100}
                  width={350}                 
                />
              </div>

              <div className="p-4 w-full">
                <h2 className="text-xl font-semibold mb-2">
                  {item?.productName}
                </h2>
                <p className="text-gray-500 text-sm mb-2">{item?.category}</p>
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
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
