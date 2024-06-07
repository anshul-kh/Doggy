import React, { useState, useEffect } from "react";
import { Masonry, Nav, SearchBar } from "../components";
import { dataQuery } from "../utils/DataQuery";
export type ItemData = {
  id: string;
  url: string;
  width: number;
  height: number;
}[];

const Shop = () => {
  const [data, setData] = useState<ItemData>([]);

  useEffect(() => {
    //fetching initial data

    const targetUrl = "https://api.thedogapi.com/v1/images/search?limit=10";
    dataQuery({ targetUrl, setData });
  }, []);

  return (
    <div className="bg-anti-flash_white-900">
      <Nav />

      <div className=" flex w-full  md:min-h-screen overflow-x-hidden bg-anti-flash_white-900 z-1 flex flex-col justify-center items-center md:overflow-hidden  pt-20 gap-10 md:gap-18 ">
        <h1 className=" text-2xl md:text-7xl text-café_noir md:px-0 px-5 font-bold border-b-4 sm:text-4xl">
          Explore Your Type Of Dog
        </h1>

        <SearchBar setData={setData} />

        {data.length !== 0 ? (
          <Masonry data={data} />
        ) : (
          <h1>Sorry, Nothing To Display</h1>
        )}
      </div>
    </div>
  );
};

export default Shop;
