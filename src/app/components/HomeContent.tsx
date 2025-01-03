import React from "react";
import Image from "next/image";

const HomeContent = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              { src: "/watch.jpg", title: "Watch", price: "$16.00" },
              { src: "/bag2.jpg", title: "Bag", price: "$21.15" },
              { src: "/sunglas.jpg", title: "Sunglasses", price: "$12.00" },
              { src: "/shirt3.jpg", title: "Shirt", price: "$18.40" },
              { src: "/tshirt2.jpg", title: "T-Shirt", price: "$16.00" },
              { src: "/jeans2.webp", title: "Jeans", price: "$21.15" },
              { src: "/sandals2.jpg", title: "Sandals", price: "$12.00" },
              { src: "/hat2.jpg", title: "Hat", price: "$18.40" },
            ].map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden group">
                  <Image
                    alt={item.title}
                    src={item.src}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="mt-1">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

