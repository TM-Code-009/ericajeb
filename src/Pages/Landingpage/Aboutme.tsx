import { FaArrowLeftLong } from "react-icons/fa6";
import img from "../../assets/image.png"
import icon from "../../assets/heroicon.png"
import { FaFolder } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-base sm:text-lg mb-10">
          Here’s a little back-story that shapes how I design.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-sm rounded-3xl overflow-hidden">
            <img
              src={img} // replace with actual image path
              alt="Profile"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 leading-snug">
              Think of me as a maker who’s always <br className="hidden sm:inline" />
              followed <span className="italic font-medium">Desire Paths</span>—those natural <br className="hidden sm:inline" />
              routes people create when they just do <br className="hidden sm:inline" />
              what feels right.
            </h3>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              From sketching T-shirts on a borrowed phone in secondary school, to apprenticing
              in a bustling Ajegunle tailoring shop, to studying Structural Engineering and
              falling head-first into UX/UI, I’ve chased whatever tugged at my curiosity — and
              turned it into craft…….
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="/about"
                className="bg-gray-800 h-[40px] hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] " >
                                  <FaArrowLeftLong className="text-black ml-1 " />
                                  </span> View More
              </a>
              <a
                href="https://wa.link/qksx5g"
                className="h-[40px] bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
               <img src={icon} alt="Check Chat Icon" className="w-10 mt-1 h-10 object-contain " /> Let’s Connect
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 h-[40px] rounded-md flex items-center gap-2"
              >
                <FaFolder className="text-[#1976D2]" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
