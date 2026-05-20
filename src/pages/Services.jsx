import { FaArrowRight } from "react-icons/fa";
import { ServicesData, whyourServices } from "../data/Services";
import { useState } from "react";
import Footer from "../Components/Footeer";
import { RiTeamFill, RiBankLine } from "react-icons/ri";
import { MdOutlineAccessTime, MdOutlineCurrencyRupee } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

function Services() {
  const [showPopup, setShowPopup] = useState(false);
  const [viewMoreId, setViewMoreId] = useState(null);

  const selectedService = ServicesData.find(
    (service) => service.id === viewMoreId,
  );
  return (
    <div>
      <div className="px-[15px]">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
          Our Comprehensive Services
        </h1>
        <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] max-w-180 mb-[30px]">
          Complete support at every step of your study abroad journey. From
          career counseling to visa assistance, we've got you covered.
        </p>
        <h2 className="text-[rgb(24,31,37)] font-bold text-center text-[26.25px] leading-[30px] mb-1 mt-20">
          Core Services
        </h2>
        <p className="text-[rgb(91,102,113)] text-[15px] text-center leading-[22px] max-w-180 mb-[30px]">
          Each service is designed to address a critical aspect of your study
          abroad process
        </p>
        {ServicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] mb-8 p-[30px] rounded-2xl "
            >
              <div className="bg-[rgb(240,250,249)] p-[11.25px] w-fit text-[22px] rounded-[11.25px] text-[rgb(0,100,240)] mb-[11.25px]">
                <Icon />
              </div>
              <h3 className="text-[18.75px] font-bold mb-3">{service.name}</h3>
              <p className="text-[rgb(91,102,113)] text-[14px] leading-[24px] ">
                {service.description}
              </p>
              <div
                className="flex items-center gap-3 text-[rgb(0,100,240)] font-semibold mt-3"
                onClick={() => {
                  setShowPopup(true);
                  setViewMoreId(service.id);
                }}
              >
                <p>View more</p>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
        {showPopup &&
          selectedService &&
          (() => {
            const Icon = selectedService.icon;
            return (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-1 px-[15px]">
                <div className="bg-white p-6 rounded-2xl w-[400px]">
                  <div className="hidden bg bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-white p-2 w-fit rounded-md">
                    <Icon className="text-3xl" />
                  </div>
                  <h1 className="text-[22.5px] font-bold mb-3">
                    {selectedService.name}
                  </h1>
                  <p className="text-[rgb(91,102,113)] text-[15px] leading-[20px]">
                    {selectedService.description}
                  </p>
                  <h2 className="text-[18px] font-semibold mb-2 mt-4">
                    Benefits
                  </h2>
                  <ul className="mt-2 list-disc ml-6 marker:text-[rgb(53,212,159)]">
                    {selectedService.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-[rgb(24,31,37)] leading-[20px] text-[15px] mb-1"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-[rgb(0,100,240)] text-white px-4 py-2 rounded-lg mt-5"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })()}
      </div>
      <div className="bg-[#f0f7ff] px-[15px] py-[60px] ">
        <h2 className="text-[rgb(24,31,37)] text-[28px] font-bold text-center leading-[33.75px] mb-[45px]">Why Choose Our Services?</h2>
        {whyourServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex flex-col items-center mb-6 bg-white p-[30px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
            >
              <div className="bg-gradient-to-r from-[#0064F0] to-[#35D49F] rounded-full p-4 text-white text-3xl mb-4.75">
                <Icon />
              </div>
              <div>
                <h3 className="text-[18.75px] font-bold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] text-center">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
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
          Book Free Consultation
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
