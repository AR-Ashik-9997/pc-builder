import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img src="" alt="Product Image" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">name</h2>
        <p className="text-gray-500 text-sm mb-2">category</p>
        <p className="text-green-600 font-bold text-lg mb-2">price</p>
        <p className="mb-2">
          <span className="text-gray-600">Status:</span>
          {/* <span className={inStock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{inStock ? "In Stock" : "Out of Stock"}</span> */}
        </p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="text-gray-600">ratingStars</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
