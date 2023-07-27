import RootLayout from "@/components/Layout/RootLayout";
import { SessionProvider } from "next-auth/react";

const productdetails = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden flex">
        {/* Product Image */}
        <img src="" alt="Product" className="w-1/3 h-40 object-cover" />

        <div className="p-4 w-2/3">
          {/* Product Name */}
          <h2 className="text-xl font-semibold mb-2">productName</h2>

          {/* Category */}
          <p className="text-gray-500 text-sm mb-2">Category: category</p>

          {/* Status */}
          <p className="mb-2">
            Status:{" "}
            {/* <span className={inStock ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span> */}
          </p>

          {/* Price */}
          <p className="text-green-600 font-bold text-lg mb-2">price</p>

          {/* Description */}
          <p className="mb-4">description</p>

          {/* Key Features */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            {/* <ul className="list-disc list-inside">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul> */}
          </div>

          {/* Individual Rating */}
          <p className="mb-2">
            Individual Rating:{" "}
            <span className="text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>{" "}
            (individualRating Stars)
          </p>

          {/* Average Rating */}
          <p className="mb-2">
            Average Rating:{" "}
            <span className="text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>{" "}
            (averageRatin Stars)
          </p>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Reviews:</h3>
            {/* {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              <p>{review}</p>
            </div>
          ))} */}
          </div>
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