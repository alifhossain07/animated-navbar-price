import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymPricingOptions = [
        {
          id: 1,
          name: "Basic Plan",
          price: 30,
          features: [
            "Access to gym during off-peak hours",
            "Free consultation with a trainer ",
            "Access to basic cardio and weight equipment",
            "Locker access",
            "Monthly fitness assessment"
          ]
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 50,
          features: [
            "Unlimited access to gym",
            "Free consultation with a trainer",
            "Access to all cardio and weight equipment",
            "Access to group fitness classes",
            "Locker access",
            "Monthly progress tracking"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 70,
          features: [
            "Unlimited access to gym",
            "One free personal training session per month",
            "Priority booking for group classes",
            "Access to sauna and steam room",
            "Free guest passes (2 per month)",
            "Free yoga and Pilates classes"
          ]
        }
      ];
      
    return (
        <div>
        <h2 className="text-4xl md:ml-20 md:mt-10 mb-10 mt-10 ml-10"> Best prices in town</h2>
       <div className="md:grid md:grid-cols-3 gap-6 flex flex-col p-8 md:p-0">
       {
            gymPricingOptions.map(option =><PriceOption option={option}></PriceOption>)
        }
       </div>
        </div>
    );
};

export default PriceOptions;