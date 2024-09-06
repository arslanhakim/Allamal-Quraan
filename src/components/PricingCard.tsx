import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`border rounded-lg p-6 ${
        plan.popular
          ? "border-green-600 bg-primary bg-opacity-10"
          : "border-gray-300"
      }`}
    >
      {plan.popular && (
        <div className="bg-primary text-white px-4 py-1 rounded-full mb-4">
          POPULAR
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
      <p className="text-sm mb-4">{plan.description}</p>
      <p className="text-3xl font-bold mb-1">{plan.price}</p>
      <p className="text-xs text-gray-500 mb-4">{plan.trial}</p>
      <ul className="text-left mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            {/* <span className="text-primary mr-2">✔️</span> */}
            <span className="text-primary mr-2">
              <IoMdCheckmark />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-1 rounded-full ${
          plan.popular
            ? "bg-primary text-white hover:bg-opacity-90 "
            : "border border-primary text-primary hover:bg-primary hover:text-white  bg-white"
        }`}
      >
        Join this Plan
      </button>
    </div>
  );
};

export default PricingCard;
