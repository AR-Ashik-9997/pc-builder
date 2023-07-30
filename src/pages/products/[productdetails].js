import RootLayout from "@/components/Layout/RootLayout";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";

const productdetails = ({ singleProduct }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="flex gap-4 flex-col xl:flex-row ">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col xl:flex-row  gap-4">
          <div className="w-full md:w-3/4 xl:w-1/2 p-4">
            <Image
              src={singleProduct?.image}
              alt="Product Image"
              height={100}
              width={900}
            />
          </div>
          <div className="p-4  w-full xl:w-1/2">
            <h2 className="text-xl font-semibold mb-2">
              {singleProduct?.productName}
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              Category: {singleProduct?.category}
            </p>
            <p className="mb-2"></p>
            <p className="text-green-600 font-bold text-lg mb-2">
              {singleProduct?.Price}
            </p>
            <p className="mb-4 text-justify">{singleProduct?.description}</p>

            <h3 className="text-lg font-semibold mb-2">
              Price:{" "}
              <span className="text-green-600">{singleProduct?.price} Tk</span>
            </h3>
            <h3 className="text-lg font-semibold mb-2">
              Status: <span>{singleProduct?.status}</span>
            </h3>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <div className="flex flex-wrap gap-2">
                {singleProduct?.keyFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-1 px-2 rounded-md"
                  >
                    {feature.value}
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-2">
              Individual Rating:
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              ({singleProduct?.individualRating})
            </p>
            <p className="mb-2">
              Average Rating:{" "}
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>{" "}
              ({singleProduct?.averageRating})
            </p>
          </div>
        </div>
        <div className="h-96 overflow-y-auto bg-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Reviews ({singleProduct?.reviews.length})
          </h2>
          {singleProduct?.reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl overflow-hidden shadow-xl bg-white mb-4"
            >
              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">
                  {review.reviewerName}
                </div>
                <p className="text-gray-700 text-base">{review.reviewText}</p>
              </div>
              <div className="px-6 py-4 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Review Rating: {review.rating}/5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default productdetails;

productdetails.getLayout = function getLayout(page) {
  return (
    <SessionProvider>
      <RootLayout>{page}</RootLayout>
    </SessionProvider>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-eight.vercel.app/all-products");
  const products = await res.json();
  const paths = products.data.map((product) => ({
    params: { productdetails: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    ` https://pc-builder-server-eight.vercel.app/single-product/${params.productdetails}`
  );
  const data = await res.json();
  return {
    props: {
      singleProduct: data.data,
    },
  };
};

