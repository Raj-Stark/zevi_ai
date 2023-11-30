import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/AppContext";

const SearchModal = () => {
  const { allProducts } = useGlobalContext();

  const [trends, setTrends] = useState();

  useEffect(() => {
    selectProduct();
  }, []);

  const selectProduct = () => {
    const data = [];

    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * 30);

      data.push(allProducts[idx]);
    }

    setTrends(data);
  };

  console.log(trends);

  return (
    <div className=" p-6  rounded-md  h-auto w-[850px] bg-white ">
      <h1 className=" text-left text-2xl font-semibold">Latest Trends</h1>

      <div className="mt-6 flex  gap-6">
        {trends &&
          trends.map((item, i) => {
            return (
              <div key={i}>
                <img
                  className=" rounded-md w-40 h-60  object-cover "
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>

      <div>
        <h1 className=" mt-10 text-left text-2xl font-semibold">
          Popular Suggestions
        </h1>
        <div className=" text-left space-y-2 mt-4 ">
          {trends &&
            trends.map((item, i) => {
              return (
                <div key={i}>
                  <p className=" text-xl">{item.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
