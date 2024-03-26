"use client";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: any) => {
  const [hasPrime] = useState(Math.random() < 0.5);
  const renderStars = () => {
    const starArray = [];
    const numStars = Math.floor(rating);
    for (let i = 0; i < numStars; i++) {
      starArray.push(<StarIcon key={i} className="h-5 w-5 text-yellow-500" />);
    }
    const remainder = rating - numStars;
    if (remainder > 0) {
      starArray.push(
        <StarIcon
          key="half"
          className="h-5 w-5 text-yellow-500"
          style={{
            clipPath: `polygon(0 0, ${remainder * 100}% 0, ${
              remainder * 100
            }% 100%, 0 100%)`,
          }}
        />
      );
    }
    return starArray;
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 whitespace-wrap">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} alt={title} width={200} height={200} />

      <h4 className="my-3 line-clamp-1">{title}</h4>
      <div className="flex">{renderStars()}</div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 mb-5">
          <Image
            src="https://m.media-amazon.com/images/I/31HLQja0xdL.jpg"
            alt="prime"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <p className="text-gray-500">Free Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
};

export default Product;
