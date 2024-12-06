import { TbCurrencyTaka } from "react-icons/tb";
const SubscriptionDemo = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto space-y-10 py-16">
      <div  className="grid grid-cols-2">
        <div className="rounded-md border font-Roboto">
          <h1 className="bg-teal-900 text-white text-center text-2xl font-semibold  font-Roboto py-5 rounded-tl-md rounded-tr-md">
            Yearly Package
          </h1>
          <div className="bg-teal-700 text-white py-3 space-y-2">
            <p className="flex items-center justify-center gap-2 text-4xl font-semibold  ">
              {" "}
              <TbCurrencyTaka /> <span>500 /</span>{" "}
            </p>
            <p className="text-center text-2xl font-semibold">per Year</p>
          </div>
          <div className="text-center space-y-3 py-3 bg-teal-300  font-medium">
            <p>Unlimited Streaming Access</p>
            <p>Exclusive Early Access</p>
            <p>Download and Watch Offline</p>
            <p>Multi-Device Support</p>
            <p>Ad-Free Experience</p>
            <button className="bg-teal-900 hover:bg-teal-700 p-3 text-white rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDemo;
