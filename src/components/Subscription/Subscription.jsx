import { FaCheck } from "react-icons/fa6";
import diamond from "../../assets/image/diamond.svg";
import { LuTicketPercent } from "react-icons/lu";
const Subscription = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-11/12 lg:w-9/12 mx-auto space-y-10 py-16">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-xl leading-6 font-Roboto"
        >
          Already Subscribed?
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border p-5 rounded-xl flex justify-between items-center"
        >
          <div className="space-y-5 font-Roboto">
            <p>Choose the plan that best suits you.</p>
            <ul className=" space-y-2 ">
              <li className="text-xl flex gap-3 items-center ">
                <FaCheck className="text-green-600 text-xl" />{" "}
                <span>Watch what you want, Ad Free!</span>{" "}
              </li>
              <li className="text-xl flex gap-3 items-center ">
                <FaCheck className="text-green-600 text-xl" />
                <span>Multi-devices Access</span>
              </li>
              <li className="text-xl flex gap-3 items-center ">
                <FaCheck className="text-green-600 text-xl" />
                <span>Change or Unsubscribe anytime you want.</span>
              </li>
            </ul>
          </div>
          <img className="lg:h-[150px]" src={diamond} alt="" />
        </div>
        {/* Daily Pack */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border hover:border-pink-700 hover:shadow-2xl p-5 rounded-xl flex justify-between items-center font-Roboto bg-color2"
        >
          <div className="space-y-5 font-Roboto">
            <h2 className="text-xl font-semibold">Daily Pack</h2>
            <p>3 Devices Login and 1 Simultaneous Stream </p>
            <h1>
              <span className="text-xl font-semibold">BDT 19</span> / 1 Day's
            </h1>
          </div>
          <button className="bg-color1 text-white py-1 px-10 text-xl rounded-md">
            Subscribe
          </button>
        </div>
        {/* Weekly Pack */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border hover:border-pink-700 hover:shadow-2xl p-5 rounded-xl flex justify-between items-center font-Roboto bg-color2"
        >
          <div className="space-y-5 font-Roboto">
            <h2 className="text-xl font-semibold">Weekly Pack</h2>
            <p>3 Devices Login and 1 Simultaneous Stream </p>
            <h1>
              <span className="text-xl font-semibold">BDT 49</span> / 7 Day's
            </h1>
          </div>
          <button className="bg-color1 text-white py-1 px-10 text-xl rounded-md">
            Subscribe
          </button>
        </div>
        {/* Monthly Pack */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border hover:border-pink-700 hover:shadow-2xl p-5 rounded-xl flex justify-between items-center font-Roboto bg-color2"
        >
          <div className="space-y-5 font-Roboto">
            <h2 className="text-xl font-semibold">Monthly Pack</h2>
            <p>3 Devices Login and 1 Simultaneous Stream </p>
            <h1>
              <span className="text-xl font-semibold">BDT 99</span> / 30 Day's
            </h1>
          </div>
          <button className="bg-color1 text-white py-1 px-10 text-xl rounded-md">
            Subscribe
          </button>
        </div>
        {/* 6-Month Pack */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border hover:border-pink-700 hover:shadow-2xl p-5 rounded-xl flex justify-between items-center font-Roboto bg-color2"
        >
          <div className="space-y-5 font-Roboto">
            <h2 className="text-xl font-semibold">6-Month Pack</h2>
            <p>3 Devices Login and 1 Simultaneous Stream </p>
            <h1>
              <span className="text-xl font-semibold">BDT 249</span> / 180 Day's
            </h1>
          </div>
          <button className="bg-color1 text-white py-1 px-10 text-xl rounded-md">
            Subscribe
          </button>
        </div>
        {/* Vouchers */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border hover:border-pink-700 hover:shadow-2xl p-5 rounded-xl font-Roboto bg-color2 space-y-6"
        >
          <h2 className="text-xl font-semibold flex items-center gap-5">
            <LuTicketPercent className="text-5xl" />
            <span>Vouchers</span>
          </h2>
          <form className="space-y-5 font-Roboto">
            <input
              type="text"
              className="w-full p-2 bg-black border border-dashed rounded-md"
              placeholder="Enter Your Coupon here"
            />
            <input
              className="bg-color1 text-white py-1 px-10 text-xl rounded-md"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
