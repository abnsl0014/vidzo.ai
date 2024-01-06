import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
const Price = ({
  name = " ",
  money = 0,
  curreny = "$",
  frequency = "month",
  featured = false,
  features = [],
}) => {
  return (
    <div
      className={`bg-white border border-[#33bbcf] rounded-xl shadow-xl cursor-pointer relative mb-2 ${
        featured ? "border-4" : "border border-opacity-10"
      }`}
    >
      {/* popular  */}
      {featured ? (
        <span
          className="bg-[#33bbcf] text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap
        absolute top-0 left-1/2 transfor -translate-x-1/2 -translate-y-1/2 "
        >
          Most Popular
        </span>
      ) : null}
      {/* card header  */}
      <div className="px-6 py-12 border-b-2 border-gray-200">
        <p className="text-3xl font-semibold text-center mb-4">{name}</p>
        <div className="flex justify-center items-center">
          <div className="flex items-start">
            <p className="text-4xl font-medium">{curreny}</p>
            <p className="text-7xl font-bold">{money}</p>
          </div>
          <p className="text-2xl text-gray-400">/{frequency}</p>
        </div>
      </div>
      {/* card body  */}
      <div className="p-6 lg:p-12 bg-gray-100 rounded-xl">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-[#33bbcf] flex-shrink-0" />
              <p className="text-lg text-gray-600">{feature}</p>
            </li>
          ))}
        </ul>
        {/* CTA  */}
        <button
          className={`mt-5 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap focus:outline-none hover:scale-105 transform transition-all ${
            featured ? "bg-[#33bbcf] hover:bg-[#5ce1e6] text-black " : "bg-white text-black hover:bg-gray-50"
          }`}
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Price;
