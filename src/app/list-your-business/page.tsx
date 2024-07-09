"use client";
import React, { useState } from "react";
import {
  STANDARD_FEATURES,
  PREMIUM_FEATURES,
  STANDARD_MONTHLY_PRICE,
  STANDARD_YEARLY_PRICE,
  PREMIUM_MONTHLY_PRICE,
  PREMIUM_YEARLY_PRICE,
} from "@/utils/constants";
import PricingToggle from "../components/PricingToggle";
import PricingPlan from "../components/PricingPlan";

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
        <p
          data-testid="description"
          className="text-center max-w-prose text-gray-500 font-light"
        >
          For maximum exposure, choose the profile that best suits your business
          needs. Select either the monthly or yearly option below to get started
          setting up your profile in our directory.
        </p>
        <PricingToggle isYearly={isYearly} handleToggle={handleToggle} />
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <PricingPlan
            planType="standard"
            isYearly={isYearly}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            monthlyPrice={STANDARD_MONTHLY_PRICE}
            yearlyPrice={STANDARD_YEARLY_PRICE}
            features={STANDARD_FEATURES}
          />
          <PricingPlan
            planType="premium"
            isYearly={isYearly}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            monthlyPrice={PREMIUM_MONTHLY_PRICE}
            yearlyPrice={PREMIUM_YEARLY_PRICE}
            features={PREMIUM_FEATURES}
          />
        </div>
      </div>
    </section>
  );
};

export default ListYourBusiness;
