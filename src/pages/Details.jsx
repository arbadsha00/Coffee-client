import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, price, details, photo } = coffee;
  return (
    <div className="container mx-auto w-11/12 bg-[#864b34] rounded-3xl py-16  gap-6 mb-16 px-6 md:px-16">
          <div className="flex rounded-xl flex-col md:flex-row items-center glass p-4">
              <div className="md:w-1/3 ">
                  <img src={photo} className="mx-auto" alt="" />
              </div>
              <div className="md:w-2/3">
                  <p className="text-xl font-semibold text-white">Name : {name}</p>
                  <p className="text-xl font-semibold text-white"> Chef : {chef}</p>
                  <p className="text-xl font-semibold text-white"> Supplier : {supplier}</p>
                  <p className="text-xl font-semibold text-white"> Taste : {taste}</p>
                  <p className="text-xl font-semibold text-white"> Price : ${price}</p>
                  <p className="text-xl font-semibold text-white"> Details : {  details}</p>
              </div>
      </div>
    </div>
  );
};

export default Details;
