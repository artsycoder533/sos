import React from 'react'

type Props = {
    isYearly: boolean;
  handleToggle: () => void;
}

const PricingToggle = (props: Props) => {
    const {isYearly, handleToggle} = props;
  return (
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
  );
};

export default PricingToggle