import { FaPlay } from "react-icons/fa";
import { reviews, VideoReviews } from "../data/testimonals";
import Footer from "../Components/Footeer";

function Reviews() {
  const length = reviews.length;

  return (
    <div>
      <div className=" py-[60px] px-[15px]">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
          Student Success Stories
        </h1>
        <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] max-w-180 mb-[30px]">
          Read inspiring stories from students who have successfully studied
          abroad and achieved their dreams with our guidance. Their success is
          our greatest achievement.
        </p>
        <hr className="text-[rgb(91,102,113)]" />
        <h3 className="text-[rgb(91,102,113)] text-[15px] mt-10">
          Showing {length} success stories
        </h3>
        {/*normal reviews*/}
        {reviews.map((review) => {
          const name = review.name.slice(0, 1);

          return (
            <div
              key={review.id}
              className="bg-white border border-[rgb(243,244,246)] rounded-[15px] mt-5 p-[22.5px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]"
            >
              <p className="mb-[15px] text-[20px] flex ">
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
              <p className="text-[rgb(24,31,37)] text-[15px] leading-[24.375px] italic mb-[22.5px]">
                "{review.review}"
              </p>
              <div className="flex flex-row items-center gap-[15px]">
                <div className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F]  p-3 w-10 h-10  flex items-center justify-center rounded-full text-white text-[15px] font-bold">
                  {name}
                </div>
                <div>
                  <h3 className="text-[rgb(24,31,37)] font-bold text-[15px]">
                    {review.name}
                  </h3>
                  <p className="text-[rgb(91,102,113)] text-[14px]">
                    {review.university}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* video reviews */}
      <div className="py-[60px] px-[15px] bg-[rgb(239,246,255)]">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
          Video Reviews
        </h1>
        <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] max-w-180 mb-[30px]">
          Watch students share their study abroad experiences in their own words
        </p>
        {VideoReviews.map((video) => {
          return (
            <div
              key={video.id}
              className="bg-white grid grid-rows-2 mb-8  rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.3)]"
            >
              <div
                onClick={() => {
                  window.open(video.url, "_blank", "noopener,noreferrer");
                }}
                className="bg bg-gradient-to-br from-[#0064F0] to-[#35D49F] text-white flex items-center justify-center text-[35px] rounded-t-2xl"
              >
                <FaPlay />
              </div>
              <div className="p-[22.5px] flex flex-col gap-0.5">
                <p className="text-[rgb(91,102,113)] text-[14px]">
                  {video.country}
                </p>
                <h3 className="text-[rgb(24,31,37)] text-[16.875px] font-bold">
                  {video.name}
                </h3>
                <p className="text-[rgb(91,102,113)] text-[14px]">
                  {video.university}
                </p>
                <h3 className="text-[rgb(0,100,240)] text-[14px] font-semibold">
                  {video.discription}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-[60px] px-[15px]">
        <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
          By The Numbers
        </h1>
        <div className="flex flex-col items-center gap-6  border-[rgb(239,241,250)] ">
          <div className="bg-[#eff8fb] w-full rounded-2xl p-[30px]">
            <h2 className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-transparent bg-clip-text text-[28.125px] font-bold text-center">
              98%
            </h2>
            <p className="text-[14px]  text-[rgb(91,102,113)] text-center">
              Visa Success Rate
            </p>
          </div>
          <div className="bg-[#eff8fb] w-full rounded-2xl p-[30px]">
            <h2 className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-transparent bg-clip-text text-[28.125px] font-bold text-center">
              5000+
            </h2>
            <p className="text-[14px]  text-[rgb(91,102,113)] text-center">
              Students Placed
            </p>
          </div>
          <div className="bg-[#eff8fb] w-full rounded-2xl p-[30px]">
            <h2 className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-transparent bg-clip-text text-[28.125px] font-bold text-center">
              15+
            </h2>
            <p className="text-[14px]  text-[rgb(91,102,113)] text-center">
              Years Experience
            </p>
          </div>
          <div className="bg-[#eff8fb] w-full rounded-2xl p-[30px]">
            <h2 className="bg bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-transparent bg-clip-text text-[28.125px] font-bold text-center">
              500+
            </h2>
            <p className="text-[14px]  text-[rgb(91,102,113)] text-center">
              Partner Universities
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0064F0] to-[#35D49F] py-[60px] px-[15px] flex flex-col items-center">
        <h2 className="text-white text-[28.125px] font-bold leading-[33.75px] text-center mb-4.75">
          Be the Next Success Story
        </h2>
        <p className="text-[rgb(239,246,255)] text-[16.2px] leading-[26px] text-center max-w-[630px] mb-[30px]">
          Join thousands of students who have achieved their study abroad dreams. Book your free consultation today!
        </p>
        <button className="bg-[rgb(243,244,246)] text-[rgb(0,100,240)] rounded-md font-bold  px-[30px] py-[15px] w-fit ">
          Book Free Consultation
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Reviews;
