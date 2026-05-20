import { FaPlay } from "react-icons/fa";
import { reviews, VideoReviews } from "../data/testimonals";

function Reviews() {
  const length = reviews.length;

  return (
    <div className="px-[15px] py-[60px]">
      <h1 className="text-[rgb(24,31,37)] font-bold text-center text-[30.75px] leading-[37.5px] mb-5.5">
        Student Success Stories
      </h1>
      <p className="text-[rgb(91,102,113)] text-[16.75px] text-center leading-[26.25px] max-w-180 mb-[30px]">
        Read inspiring stories from students who have successfully studied
        abroad and achieved their dreams with our guidance. Their success is our
        greatest achievement.
      </p>
      <h3 className="text-[rgb(91,102,113)] text-[15px] mb-3">
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
                    star <= review.rating ? "text-yellow-500" : "text-gray-300"
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
      {/* video reviews */}
      <div className="py-[60px] ">
        {VideoReviews.map((video) => {
          return (
            <div
              key={video.id}
              className="bg-white grid grid-rows-2 my-15  rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.3)]"
            >
              <div className="bg bg-gradient-to-br from-[#0064F0] to-[#35D49F] text-white flex items-center justify-center text-[35px] rounded-t-2xl">
                <FaPlay />
              </div>
              <div className="p-[22.5px]">
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
    </div>
  );
}

export default Reviews;
