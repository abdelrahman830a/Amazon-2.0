import React from "react";
import Image from "next/image";
import Product from "./Product";

interface Props {
  products?: any;
}

const ProductFeed = async () => {
  const prodcuts = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 sm:mx-20">
      {prodcuts
        .slice(0, 4)
        .map(
          ({ id, title, price, description, category, image, rating }: any) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating.rate}
            />
          )
        )}

      <Image
        className="md:col-span-full object-cover"
        alt="layer"
        width={1250}
        height={250}
        src="https://links.papareact.com/dyz"
      />

      <div className="md:col-span-3 flex-1">
        {prodcuts
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
              rating,
            }: any) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating.rate}
              />
            )
          )}
      </div>

      {prodcuts
        .slice(5, prodcuts.length)
        .map(
          ({ id, title, price, description, category, image, rating }: any) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating.rate}
            />
          )
        )}
    </div>
  );
};

export default ProductFeed;
