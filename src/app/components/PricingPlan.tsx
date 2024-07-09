import { BiCheck } from "react-icons/bi";

type Props = {
    planType: string;
  isYearly: boolean;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];

}

const PricingPlan = (props: Props) => {
    const {planType,
        isYearly,
        selectedPlan,
        setSelectedPlan,
        monthlyPrice,
        yearlyPrice,
        features} = props;
  return (
    <div className="rounded-lg max-w-sm w-[500px] p-8 flex flex-col gap-4 border">
      <p className="">{planType.charAt(0).toUpperCase() + planType.slice(1)} Profile</p>
      {isYearly ? (
        <p className="text-3xl font-bold">
          $ {yearlyPrice}
          <span className="text-sm text-gray-500 font-medium">/year</span>
        </p>
      ) : (
        <p className="text-3xl font-bold">
          $ {monthlyPrice}
          <span className="text-sm text-gray-500 font-medium">/month</span>
        </p>
      )}
      <button
        onClick={() => setSelectedPlan(planType)}
        className="bg-accent text-black px-5 py-3 rounded-lg"
      >
        Select {planType.charAt(0).toUpperCase() + planType.slice(1)}
      </button>
      <ul className="list-inside flex flex-col gap-2">
        {features.map((feature, index) => (
          <li
            key={`${planType} + ${index}`}
            className="flex gap-4 items-center font-light text-sm"
          >
            <BiCheck className="text-accent text-xl" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingPlan