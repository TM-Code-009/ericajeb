import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import passportImg from "../../assets/jfull3.png"; // Make sure you save the image from the screenshot as "passport.png"

const Everything = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-400  mt-20">
          Home / Journal / <span className="font-semibold text-white">Everything is as it should be</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mt-4 md:mt-20">Everything is as it should be</h1>
        <p className="text-sm mt-2 text-gray-300">Everything is as it should be</p>

        <div className="flex items-center gap-6 text-sm text-gray-400 mt-3">
          <div className="flex items-center gap-1">
            <FaRegClock className="text-[#1976D2]" />
            1 min read
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-[#1976D2]" />
            Oct 03, 2024
          </div>
        </div>

        <div className="my-8">
          <img src={passportImg} alt="Universal Citizen Passport" className="rounded-md w-60" />
        </div>

        <div className="text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line text-white">
          {`
Everything is as it should be
Everything is where it should be
Everything is working accordingly
Just be the best version of yourself
Everything is connected
Everybody in this world is connected
We are just like an orange ball
Where everything inside the orange is connected
so is the earth
Earth = orange ball
The earth is still standing so everything is as it should be
So you are doing fine.
You are doing the best of your knowledge
So choose to be the best version of yourself all the time
Forgive your past
Forgive your formal self
They were just doing what they believe is right at that moment.
Same way you are currently doing what you think is right at this particular moment
So there is actually nothing to forgive.
So everything is as it should be.
          `}
        </div>
      </div>
    </section>
  );
};

export default Everything;
