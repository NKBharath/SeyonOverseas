import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQSection({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-[15px] py-[60px] bg-white">

      {/* Heading */}
      <div className="text-center mb-[45px]">
        <h2 className="text-[28px] font-bold text-[rgb(24,31,37)] mb-3">
          Frequently Asked Questions
        </h2>

        <p className="text-[rgb(91,102,113)] text-[15px] leading-[24px] max-w-[700px] mx-auto">
          Find answers to the most commonly asked questions about studying abroad,
          student visas, scholarships and our consultancy services.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-[900px] mx-auto">

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[rgb(229,231,235)] rounded-2xl mb-5 shadow-[0px_0px_10px_rgba(0,0,0,0.08)] overflow-hidden"
          >

            {/* Question */}
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left p-[22px]"
            >
              <h3 className="text-[16.5px] md:text-[18px] font-semibold text-[rgb(24,31,37)] pr-5 leading-[26px]">
                {faq.question}
              </h3>

              <div className="text-[rgb(0,100,240)] text-[16px] shrink-0">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </button>

            {/* Answer */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[300px] opacity-100 pb-[22px]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[rgb(91,102,113)] text-[15px] leading-[26px] px-[22px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;