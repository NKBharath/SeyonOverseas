import { ContactData } from "../data/Services";

function Contact() {
  return (
    <div>
      <div className=" px-[15px] py-[60px] ">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
          Student Success Stories
        </h1>
        <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] max-w-180 mb-[30px]">
          Read inspiring stories from students who have successfully studied
          abroad and achieved their dreams with our guidance. Their success is
          our greatest achievement.
        </p>
        {ContactData.map((contact) => {
          const Icon = contact.icon;
          return (
            <div
              key={contact.id}
              className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] mb-8 p-[30px] rounded-2xl flex flex-col items-center text-center"
            >
              <div className="bg-[#1DB655] p-[11.25px] w-fit text-[22px] rounded-full text-white mb-[11.25px]">
                <Icon />
              </div>
              <h3 className="text-[18.75px] font-bold mb-1.75">
                {contact.title}
              </h3>
              <p className="text-[rgb(91,102,113)] text-[15px] leading-[22.5px] mb-3.75">
                {contact.description}
              </p>
              <p className="text-[rgb(0,100,240)] font-bold text-[15px]">
                {contact.contact}
              </p>
              <p className="text-[rgb(91,102,113)] text-[14px] ">
                {contact.time}
              </p>
            </div>
          );
        })}
      </div>
      {/* <div className="bg-[#EFF6FF] px-[15px] py-[60px]">
        <div className= "bg-white p-[30px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] ">
            <h2 className="text-[rgb(24,31,37)] text-[28px] font-bold mb-1.75 leading-[30.75px]">Send Us a Message</h2>
            <p className = "text-[rgb(91,102,113)] text-[15px] leading-[20.5px] mb-7.5">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
