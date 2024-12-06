import { TbCurrencyTaka } from "react-icons/tb";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const SubscriptionDemo = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto space-y-10 py-16">
      <h1 className="text-center text-4xl font-semibold  font-JosefinSans ">
        Our Subscription
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Yearly Package */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="rounded-md border font-Roboto"
        >
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
          <div className="text-center space-y-3 py-3 bg-teal-300  font-medium rounded-bl-md rounded-br-md">
            <p>Unlimited Streaming Access</p>
            <p>Exclusive Early Access</p>
            <p>Download and Watch Offline</p>
            <p>Multi-Device Support</p>
            <p>Ad-Free Experience</p>
            <div>
              <Link to={"/subscription"}>
                <button className="bg-teal-900 hover:bg-teal-700 p-3 text-white rounded-md">
                  Subscribe Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* 6- Month Package */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="rounded-md border font-Roboto"
        >
          <h1 className="bg-green-900 text-white text-center text-2xl font-semibold  font-Roboto py-5 rounded-tl-md rounded-tr-md">
            Half Yearly Package
          </h1>
          <div className="bg-green-700 text-white py-3 space-y-2">
            <p className="flex items-center justify-center gap-2 text-4xl font-semibold  ">
              {" "}
              <TbCurrencyTaka /> <span>500 /</span>{" "}
            </p>
            <p className="text-center text-2xl font-semibold">per 6 Month</p>
          </div>
          <div className="text-center space-y-3 py-3 bg-green-300  font-medium rounded-bl-md rounded-br-md">
            <p>Ad-Free Streaming</p>
            <p>Access to Exclusive Content</p>
            <p>Multi-Device Access</p>
            <p>Offline Downloads</p>
            <p>Priority Support</p>
            <div>
              <Link to={"/subscription"}>
                <button className="bg-green-700 hover:bg-green-800 p-3 text-white rounded-md">
                  Subscribe Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to={"/subscription"}>
          <button className="bg-green-900 hover:bg-green-700 text-2xl font-semibold font-JosefinSans px-14 py-2 text-white rounded-md flex items-center ">
            <span className="mr-5">Explore More to get Free </span>{" "}
            <FaAngleDoubleRight />
            <FaAngleDoubleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionDemo;
