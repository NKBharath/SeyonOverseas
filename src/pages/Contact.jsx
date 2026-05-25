import Header from "../Components/Header";
import Footer from "../Components/Footeer";
import { ContactData } from "../data/Services";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "28bd7981-031a-441e-b68a-8eff0a1e4b71");

    formData.append("subject", "New Overseas Education Enquiry");

    formData.append("from_name", "Seyon Overseas");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setResult("Success");

        event.target.reset();
      } else {
        alert("Failed to send message. Please try again.");

        setResult("Failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong!");

      setResult("Error");
    }
  };

  return (
    <div>
      <Header />

      {/* Heading */}
      <div className="px-[15px] mt-[40px]">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5">
          Student Success Stories
        </h1>

        <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] mb-[30px] md:max-w-[600px] mx-auto">
          Read inspiring stories from students who have successfully studied
          abroad and achieved their dreams with our guidance. Their success is
          our greatest achievement.
        </p>
      </div>

      {/* Main Layout */}
      <div className="xl:flex xl:justify-center xl:items-start xl:gap-10 xl:px-10">
        <div className="px-[15px] pb-[60px] mt-[30px]">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 xl:flex xl:flex-col xl:gap-6">
            {ContactData.map((contact) => {
              const Icon = contact.icon;

              return (
                <div
                  key={contact.id}
                  className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] mb-8 p-[30px] rounded-2xl flex flex-col items-center text-center md:w-[400px] mx-auto lg:w-full xl:w-[420px]"
                >
                  <div className="bg-[#1DB655] p-[11.25px] w-fit text-[22px] rounded-full text-white mb-[11.25px]">
                    <Icon />
                  </div>

                  <h3 className="text-[18.75px] font-bold mb-1.5">
                    {contact.title}
                  </h3>

                  <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] mb-3">
                    {contact.description}
                  </p>

                  <p className="text-[rgb(0,100,240)] font-bold text-[15px]">
                    {contact.contact}
                  </p>

                  <p className="text-[rgb(91,102,113)] text-[14px]">
                    {contact.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#EFF6FF] py-[30px] px-[15px] rounded-2xl xl:w-[500px] xl:bg-white mb-[60px]">
          <div className="bg-white p-[30px] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-2xl md:w-[400px] lg:w-[500px] mx-auto">
            <h2 className="text-[28px] font-bold mb-2">Send us a Message</h2>

            <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] mb-[30px]">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={onSubmit}>
              <label
                htmlFor="name"
                className="block mb-2 text-[rgb(24,31,37)] font-bold text-[14px]"
              >
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Kumar"
                className="bg-[rgb(249,250,251)] w-full border border-[rgb(229,231,235)] py-[12px] px-[15px] rounded-[11px] outline-none"
              />

              <label
                htmlFor="email"
                className="block mb-3 mt-[35px] text-[rgb(24,31,37)] font-bold text-[14px]"
              >
                Email *
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="kumar@example.com"
                className="bg-[rgb(249,250,251)] w-full border border-[rgb(229,231,235)] py-[12px] px-[15px] rounded-[11px] outline-none"
              />

              <label
                htmlFor="phone"
                className="block mb-3 mt-[35px] text-[rgb(24,31,37)] font-bold text-[14px]"
              >
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 12345 67890"
                className="bg-[rgb(249,250,251)] w-full border border-[rgb(229,231,235)] py-[12px] px-[15px] rounded-[11px] outline-none"
              />

              <label
                htmlFor="message"
                className="block mb-3 mt-[35px] text-[rgb(24,31,37)] font-bold text-[14px]"
              >
                Message *
              </label>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your message here..."
                className="bg-[rgb(249,250,251)] w-full border border-[rgb(229,231,235)] py-[12px] px-[15px] rounded-[11px] outline-none resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={result === "Sending..."}
                className="bg-[rgb(29,78,216)] hover:bg-[rgb(24,64,180)] disabled:opacity-70 transition text-white py-[12px] px-[15px] rounded-[11px] w-full mt-[20px] font-bold text-[16px]"
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
