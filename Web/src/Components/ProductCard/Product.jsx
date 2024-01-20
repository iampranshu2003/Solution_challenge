import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4 text-gray-800">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-lg">₹  {price}</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
