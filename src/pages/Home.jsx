import { Helmet } from "react-helmet-async";
import Countries from "../data/Destinations";
import { ServicesData } from "../data/Services";
import { reviews } from "../data/testimonals";
import eligibility from "../data/eligibility";
import { LuCircleCheckBig } from "react-icons/lu";
import Footer from "../Components/Footeer";
import Header from "../Components/Header";
import FAQSection from "../Components/FAQSection";
import { homeFAQ } from "../data/faq";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Helmet>
        <meta name="google-site-verification" content=" google0b592912acd99920" />
        <title>
          Best Overseas Education Consultancy in Namakkal | Seyon Overseas
        </title>
        <meta
          name="description"
          content="Seyon Overseas is a trusted overseas education consultancy in Namakkal helping students study in Canada, UK, USA, Australia and more with expert visa, admission and scholarship support."
        />
        <meta
          name="keywords"
          content="Overseas education consultancy in Namakkal, Study abroad consultants, Canada education consultants, UK student visa, Australia education consultancy, Seyon Overseas"
        />
        <meta name="author" content="Seyon Overseas" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best Overseas Education Consultancy in Namakkal | Seyon Overseas"
        />
        <meta
          property="og:description"
          content="Best Overseas Education Consultancy in Namakkal that helps student to study in Canada, UK, USA, Australia and more. We provide end-to-end support for your study abroad journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seyonoverseas.in/" />
        <link rel="canonical" href="https://seyonoverseas.in/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFAQ.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Seyon Overseas",
            url: "https://seyonoverseas.in",
            description:
              "Best OverSeas Education Consultancy in Namakkal that helps student to study in Canada, UK, USA, Australia and more. We provide end-to-end support for your study abroad journey.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Namakkal",
              addressCountry: "India",
            },
          })}
        </script>
      </Helmet>
      <Header />
      {/* Hero Section */}
      <div className=" px-[15px] py-[75px] bg bg-linear-to-r from-[#1E3A8A] to-[#1E293B] h-fit ">
        <h1 className="text-white text-[33.75px] font-bold leading-[37.5px] mb-[22.5px] font-poppins font-sans">
          Study Abroad Without Stress
        </h1>
        <h2 className="text-[rgb(134,239,172)] text-[18.75px] font-semibold leading-[26.25px] mb-[15px] ">
          End-to-end guidance for your international education
        </h2>
        <p className="text-[rgb(219,234,254)] text-[16.875px] leading-[27.421px] mb-[22.5px] md:max-w-[650px]">
          Join thousands of students who have successfully studied abroad with
          our expert consultancy. We make your dream education a reality.
        </p>
        <div className="grid grid-cols-2 gap-6 border-t border-b border-[rgb(239,241,250)] pt-3 pb-4 md:grid-cols-4 md:py-8 md:text-center">
          <div>
            <h2 className="text-[rgb(134,239,172)] text-[28.125px] font-bold ">
              98%
            </h2>
            <p className="text-[14px]  text-[rgb(191,219,254)]">
              Visa Success Rate
            </p>
          </div>
          <div>
            <h2 className="text-[rgb(147,197,253)] text-[28.125px] font-bold ">
              5000+
            </h2>
            <p className="text-[14px]  text-[rgb(191,219,254)]">
              Students Placed
            </p>
          </div>
          <div>
            <h2 className="text-[rgb(134,239,172)] text-[28.125px] font-bold ">
              15+
            </h2>
            <p className="text-[14px]  text-[rgb(191,219,254)]">
              Years Experience
            </p>
          </div>
          <div>
            <h2 className="text-[rgb(147,197,253)] text-[28.125px] font-bold ">
              500+
            </h2>
            <p className="text-[14px]  text-[rgb(191,219,254)]">
              Partner Universities
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-[25px] md:flex-row md:justify-center">
          <button className="bg-[rgb(22,163,74)] text-white px-6 py-3 rounded-md text-[16.675px] font-bold">
            Book Free Consultation
          </button>
          <button className="bg-transparent border border-[rgb(147,197,253)] text-[rgb(147,197,253)] px-6 py-3 rounded-md text-[16.675px] font-bold">
            Explore Destinations
          </button>
        </div>
      </div>
      {/* Study Destinations */}
      <div className="px-[15px] py-[30px]">
        <h2 className="text-[rgb(24,31,37)] text-[28.125px] font-bold leading-8.25 text-center mb-3.75">
          Popular Study Destinations
        </h2>
        <p className="text-[rgb(91,102,113)] text-[16.875px] leading-[26.25px] mb-7.5  text-center mx-auto md:max-w-[630px]">
          Choose from the world's top education destinations. Each country
          offers unique opportunities for growth and success.
        </p>
        <div className=" grid md:grid-cols-2 gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
          {Countries.map((country) => (
            <div
              key={country.id}
              className="bg-[rgb(255,255,255)] border-[0.8px] border-[rgb(243,244,246)] rounded-2xl p-[22.5px] mb-5 shadow-md md:max-w-[600px] md:mx-auto "
            >
              <h3 className="text-[rgb(24,31,37)] text-[18.75px] font-bold mb-2.75">
                {country.name}
              </h3>
              <ul className="ml-4 list-disc marker:text-[rgb(53,212,159)]">
                {country.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[rgb(91,102,113)] text-[14px] mt-[7.5px] leading-[18.75px]"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="text-center w-full bg-[rgb(239,246,255)] text-[rgb(0,100,240)] border-[1.6px] border-[rgb(0,100,240)] text-[15px] px-[22.5px] py-[11.25px] rounded-md font-semibold mt-5">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
      {/*Services Section */}
      <div className="px-[15px] py-[30px] bg-[#f0f6ff]">
        <h2 className="text-[rgb(24,31,37)] text-[28.125px] font-bold text-center mb-3.75">
          Our Services
        </h2>
        <p className="text-[rgb(91,102,113)] text-[16.875px] text-center mb-7.5">
          Comprehensive support at every step of your study abroad journey
        </p>
        <div className="px-[15px] grid lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-y-10">
          {ServicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border-[0.8px] border-[rgb(243,244,246)] shadow-md rounded-2xl mt-5 p-[22.5px] md:w-[600px] md:mx-auto lg:mt-0 lg:w-full "
              >
                <Icon className="text-[rgb(0,100,240)] text-[30px] mb-3.75" />
                <h3 className="text-[rgb(24,31,37)] text-[18.75px] font-bold mb-2.75">
                  {service.name}
                </h3>
                <p className="text-[rgb(91,102,113)] text-[15px] leading-[24.375px] mb-[22.5px] ">
                  {service.description}
                </p>
                <h4 className="text-[rgb(0,100,240)] font-semibold text-[15px]">
                  Learn More
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-[rgb(2,16,37)] py-[60px] px-[15px] ">
        <h2 className="text-[rgb(255,255,255)] text-[28.125px] font-bold mb-3.75 text-center">
          Success Stories
        </h2>
        <p className="text-[rgb(191,219,254)] leading-[26.25px] text-[16.875px] font-normal text-center">
          Read inspiring stories from students who have achieved their dreams
          with our guidance
        </p>
        <div className=" grid md:grid-cols-2 gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
          {reviews.map((review) => {
            const name = review.name.slice(0, 1);
            return (
              <div
                key={review.id}
                className="bg-[rgb(30,41,59)] border border-[rgb(51,65,85)] rounded-[15px] mt-5 p-[22.5px] md:max-w-[600px] md:mx-auto"
              >
                <p className="mb-[15px] flex ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </p>
                <p className="text-[rgb(219,234,254)] text-[15px] leading-[24.375px] italic mb-[22.5px]">
                  "{review.review}"
                </p>
                <div className="flex flex-row items-center gap-[15px]">
                  <div className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F]  p-3 w-10 h-10  flex items-center justify-center rounded-full text-white text-[15px] font-bold">
                    {name}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[15px]">
                      {review.name}
                    </h3>
                    <p className="text-[#93C5FD] text-[14px]">
                      {review.university}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Our Step Process */}
      {/* <div className="py-[60px] px-[15px]">
        <h2 className="text-black text-[28.125px] font-bold mb-3.75 text-center">
          Our Step Process
        </h2>
        <p className="text-[rgb(91,102,113)] leading-[26.25px] text-[16.875px] font-normal text-center">
          A clear roadmap to your international education success
        </p>
      </div> */}
      {/* Check Eligibility */}
      {/* <div className="py-[60px] px-[15px] ">
        <h2 className="text-[rgb(24,31,37)] text-[28.125px] font-bold mb-3.75 text-left md:text-center">
          Check your eligibility
        </h2>
        <p className="text-[rgb(91,102,113)] leading-[25.25px] text-[16.875px] font-normal text-left mb-[30px] md:text-center md:max-w-[630px] md:mx-auto">
          Not sure if you're eligible? Our expert consultants will assess your
          profile and recommend the best universities and countries for you.
        </p>
        {eligibility.map((item) => (
          <div key={item.id} className="flex gap-2  mb-1.5 md:ml-[225px]">
            <LuCircleCheckBig aria-hidden="true" className="text-green-500 text-[20px] mt-1" />
            <p className="text-[15px] font-normal ">{item.discription}</p>
          </div>
        ))}
      </div>
      <div className=" px-[15px]">
        <div className="p-[30px] bg-[rgb(255,255,255)] rounded-[15px] ">
          <h2 className="text-[rgb(24,31,37)] font-bold text-[22.5px] mb-[22.5px]">
            Free Eligibility Check
          </h2>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="border-[0.8px] border-[rgb(229,231,235)] placeholder:text-[rgb(24,31,37)] rounded-[11.25px] placeholder:text-[15px] w-full px-[15px] py-[11.25px] mb-5"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email Address"
            className="border-[0.8px] border-[rgb(229,231,235)] placeholder:text-[rgb(24,31,37)] rounded-[11.25px] placeholder:text-[15px] w-full px-[15px] py-[11.25px] mb-5"
          />
          <input
            type="tel"
            id="phone"
            placeholder="Your Phone Number"
            className="border-[0.8px] border-[rgb(229,231,235)] placeholder:text-[rgb(24,31,37)] rounded-[11.25px] placeholder:text-[15px] w-full px-[15px] py-[11.25px] mb-5"
          />
          <select
            name="country"
            id=""
            className="border-[0.8px] border-[rgb(229,231,235)] placeholder:text-[rgb(24,31,37)] rounded-[11.25px] placeholder:text-[15px] w-full px-[15px] py-[11.25px] mb-5"
          >
            <option value="">Select Your Country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
          <button className="bg-[rgb(29,78,216)] text-white w-full p-[15px] text-[15px] font-bold rounded-2xl">
            Check My Eligibility
          </button>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-[#0064F0] to-[#35D49F] py-[60px] px-[15px] flex flex-col items-center">
        <h2 className="text-white text-[28.125px] font-bold leading-[33.75px] text-center mb-4.75">
          Ready to Transform Your Future?
        </h2>
        <p className="text-[rgb(239,246,255)] text-[16.875px] leading-[26px] text-center max-w-[630px] mb-[30px]">
          Start your study abroad journey today with expert guidance and support
        </p>
        <button
          onclick={() => navigate("/contact")}
          className="bg-[rgb(243,244,246)] text-[rgb(0,100,240)] rounded-md font-bold  px-[30px] py-[15px] w-fit "
        >
          Book Free Consultation{" "}
        </button>
      </div>
      <FAQSection faqData={homeFAQ} />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
