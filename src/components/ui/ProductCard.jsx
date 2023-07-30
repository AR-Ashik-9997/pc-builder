import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ feateuredProducts }) => {
  const router = useRouter();
  return (
    <section className="pt-24">
      <div className="py-8">
        <h1 className="text-center text-xl lg:text-3xl font-semibold">
          Featured Products
        </h1>
        <p className="text-center">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-3/4 mx-auto gap-4 p-4">
        {feateuredProducts.map((item, i) => (
          <div
            className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            key={i}
          >
            <button
              onClick={() => router.push(`/products/${item?._id}`)}
              className="active:scale-95 duration-200"
            >
              <div className="p-4">
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
                <p className="text-gray-500 text-sm mb-2">
                  <span className="font-medium">Category: </span>
                  {item?.category}
                </p>
                <p className="text-green-600 font-bold text-lg mb-2">
                  <span>Price: </span> {item?.price} Tk
                </p>
                <p className="mb-2">
                  <span className="text-gray-600">{item?.status}</span>
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-1">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>                 
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
