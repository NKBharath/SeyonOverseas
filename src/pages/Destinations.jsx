import { TfiStatsUp, TfiWorld } from "react-icons/tfi";
import Countries from "../data/Destinations";
import { FiDollarSign } from "react-icons/fi";
import Footer from "../Components/Footeer";

function Destinations() {
  return (
    <div className="mt-[60px]">
      <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[33.75px] leading-[37.5px] mb-5.5">
        Study Destinations Worldwide
      </h1>
      <p className="text-[rgb(91,102,113)] text-[18.75px] text-center leading-[26.25px] max-w[720px] mb-[30px]">
        Explore the world's best study destinations. Each country offers unique
        opportunities for growth, learning, and career development. Find the
        perfect match for your educational goals.
      </p>
      {Countries.map((country) => {
        return (
          <div
            key={country.id}
            className="bg-[rgb(255,255,255)] border-[rgb(243,244,246)]  shadow-[0_6px_10px_rgba(0,0,0,0.1)] rounded-[15px] p-[30px] mb-10 mx-[15px]"
          >
            <div className="flex justify-between">
              <div className="text-[rgb(24,31,37)]">
                <h2 className="text-[25.75px] font-bold">{country.c_code}</h2>
                <h2 className="text-[17.75px] font-bold">{country.name}</h2>
              </div>
              <div>
                <p className="text-[rgb(0,100,240)] font-bold text-[25.75px] text-right">
                  {country.visa_SRate}%
                </p>
                <p className="text-[rgb(91,102,113)]">Visa Success</p>
              </div>
            </div>
            <div className="bg-[rgb(239,246,255)] p-3.75 my-3 rounded-2xl">
              <h2 className="text-[rgb(91,102,113)] text-[14px] mb-[3.75px]">
                Average Cost
              </h2>
              <p className="text-[rgb(24,31,37)] font-bold">
                {country.Average_Cost}
              </p>
            </div>
            <div className="mb-5.5">
              <h2 className="text-[rgb(24,31,37)] font-semibold mb-2.75">
                Key Benefits:
              </h2>
              <ul className="list-disc marker:text-[rgb(53,212,159)] pl-5">
                {country.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[rgb(91,102,113)] text-[14px] leading-[18.75px] mb-1"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between px-2">
              <div className="text-center">
                <h2 className="text-[rgb(0,100,240)] font-bold">
                  {country.Universities}
                </h2>
                <p className="text-[rgb(91,102,113)] text-[14px]">
                  Universities
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-[rgb(53,212,159)] font-bold">
                  {country.Indian_Students}
                </h2>
                <p className="text-[rgb(91,102,113)] text-[14px]">Students</p>
              </div>
              <div className="text-center">
                <h2 className="text-[rgb(0,100,240)] font-bold">
                  {country.Courses}
                </h2>
                <p className="text-[rgb(91,102,113)] text-[14px]">Courses</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="px-[15px] bg-[#F2F8FF] py-[60px]">
        <h2 className="text-[28.125px] font-bold text-center mb-[45px]">
          Why Study Abroad?
        </h2>
        <div>
          <div className="flex flex-col items-center mt-4">
            <div className="bg-[rgb(12,99,238)] rounded-full p-4 text-white text-3xl ">
              <TfiStatsUp />
            </div>
            <h3 className="text-[18.75px] font-bold mb-3 mt-3.75">
              Carrer Growth
            </h3>
            <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] text-center">
              Access global job markets and international career opportunities
              with qualifications recognized worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="bg-[rgb(53,212,159)] rounded-full p-3 text-white text-4xl ">
              <TfiWorld />
            </div>
            <h3 className="text-[18.75px] font-bold mb-3 mt-3.75">
              Global Network
            </h3>
            <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] text-center">
              Build connections with students and professionals from around the
              world, expanding your network globally.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="bg-[rgb(12,99,238)] rounded-full p-4 text-white text-3xl ">
              <FiDollarSign />
            </div>
            <h3 className="text-[18.75px] font-bold mb-3 mt-3.75">
              Value for Money
            </h3>
            <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] text-center">
              Many countries offer high-quality education at competitive fees
              with excellent scholarship opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0064F0] to-[#35D49F] py-[60px] px-[15px] flex flex-col items-center">
        <h2 className="text-white text-[28.125px] font-bold leading-[33.75px] text-center mb-4.75">
          Ready to Choose Your Destination?
        </h2>
        <p className="text-[rgb(239,246,255)] text-[16.2px] leading-[26px] text-center max-w-[630px] mb-[30px]">
          Our expert consultants will help you select the perfect country and
          university based on your profile and goals.
        </p>
        <button className="bg-[rgb(243,244,246)] text-[rgb(0,100,240)] rounded-md font-bold  px-[30px] py-[15px] w-fit ">
          Book Free Consultation{" "}
        </button>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Destinations;
