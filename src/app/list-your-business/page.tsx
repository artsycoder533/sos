"use client";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import {
  STANDARD_FEATURES,
  PREMIUM_FEATURES,
  STANDARD_MONTHLY_PRICE,
  STANDARD_YEARLY_PRICE,
  PREMIUM_MONTHLY_PRICE,
  PREMIUM_YEARLY_PRICE,
} from "@/utils/constants";

const ListYourBusiness = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("standard");

  const handleToggle = () => {
    setIsYearly((prevState) => !prevState);
  };

  return (
    <section className="py-40">
      <div className="max-w-[1400] w-[90vw] mx-auto flex flex-col items-center gap-4">
        <p className="text-center text-accent font-semibold">Pricing</p>
        <h1 className="text-4xl font-bold">
          Choose the right profile for your business
        </h1>
        <p className="text-center max-w-prose text-gray-500 font-light">
          For maximum exposure, choose the profile that best suits your business
          needs. Select either the monthly or yearly option below to get started
          setting up your profile in our directory.
        </p>
        <div className="flex justify-center my-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isYearly}
              onChange={handleToggle}
            />
            <div className="w-56 h-8 bg-gray-200 rounded-full relative peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800">
              <div
                className={`absolute top-0 left-0 w-1/2 h-full rounded-lg transition-transform ${
                  isYearly ? "transform translate-x-full" : ""
                }`}
              ></div>
              <div
                className={`absolute top-0 left-0 w-1/2 h-full bg-white dark:bg-accent rounded-full shadow-md transition-transform ${
                  isYearly ? "translate-x-full" : ""
                }`}
              ></div>
              <div
                tabIndex={0}
                className="absolute top-0 left-0 w-1/2 h-full flex justify-center items-center text-gray-900  font-medium"
              >
                Monthly
              </div>
              <div
                tabIndex={0}
                className="absolute top-0 right-0 w-1/2 h-full flex justify-center items-center text-gray-900  font-medium"
              >
                Yearly
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="rounded-lg max-w-sm w-[500px] p-8 flex flex-col gap-4 border">
            <p className="">Standard Profile</p>
            {isYearly ? (
              <p className="text-3xl font-bold">
                $ {STANDARD_YEARLY_PRICE}
                <span className="text-sm text-gray-500 font-medium">/year</span>
              </p>
            ) : (
              <p className="text-3xl font-bold">
                $ {STANDARD_MONTHLY_PRICE}
                <span className="text-sm text-gray-500 font-medium">
                  /month
                </span>
              </p>
            )}
            <button
              onClick={() => setSelectedPlan("standard")}
              className="bg-accent text-white px-5 py-3 rounded-lg"
            >
              Select Standard
            </button>
            <ul className=" list-inside flex flex-col gap-2">
              {STANDARD_FEATURES.map((feature, index) => (
                <li
                  key={`standard + ${index}`}
                  className="flex gap-4 items-center font-light text-sm"
                >
                  <BiCheck className="text-accent text-xl" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg max-w-sm w-[500px] p-8 flex flex-col gap-4 border">
            <p className="r">Premium Profile</p>
            {isYearly ? (
              <p className="text-3xl font-bold">
                $ {PREMIUM_YEARLY_PRICE}
                <span className="text-sm text-gray-500 font-medium">/year</span>
              </p>
            ) : (
              <p className="text-3xl font-bold">
                $ {PREMIUM_MONTHLY_PRICE}
                <span className="text-sm text-gray-500 font-medium">
                  /month
                </span>
              </p>
            )}
            <button
              onClick={() => setSelectedPlan("premium")}
              className="bg-accent text-white px-5 py-3 rounded-lg"
            >
              Select Premium
            </button>
            <ul className="list-inside gap-2 flex flex-col">
              {PREMIUM_FEATURES.map((feature, index) => (
                <li
                  key={`standard + ${index}`}
                  className="flex gap-4 items-center font-light text-sm"
                >
                  <BiCheck className="text-accent text-xl" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListYourBusiness;
