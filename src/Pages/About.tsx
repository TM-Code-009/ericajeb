import img from "../assets/image.png";
import img1 from "../assets/journal1.png";
import img2 from "../assets/featured1.png"
import img3 from "../assets/journal2.png"
import icon from "../assets/heroicon.png";
import { FaFolder } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="w-full bg-[#0d0d0d] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm text-gray-400 mb-2">Home / About Me</p>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image */}
          <img
            src={img}
            alt="Profile"
            className="w-64 h-auto object-cover rounded-2xl"
          />

          {/* Content */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-4">
              Think of me as a maker who’s always followed Desire Paths—
              those natural routes people create when they just do what feels right.
            </p>

            <p className="text-gray-300 mb-4">
              From sketching T-shirts on a borrowed phone in secondary school,
              to apprenticing in a bustling Aba tailoring shop, to studying
              Structural Engineering and falling head-first into UX/UI, I’ve
              chased whatever tugged at my curiosity—and turned it into craft.
            </p>

            <h4 className="text-white font-semibold mt-6 mb-2">Why it matters:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Hands-on roots: Fashion and shoemaking taught me to respect materials, constraints and care for every stitch.
              </li>
              <li>
                Systems thinking: Engineering drilled in structure and problem-solving, giving me a blueprint mindset for complex products.
              </li>
              <li>
                User-first: I design around real-world Desire Paths, noticing how people actually behave.
              </li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">Today I build:</h4>
            <p className="text-gray-300 mb-4">
              Products that solve everyday problems—whether it’s an app streamlining payments
              or a piece of furniture that simplifies work better. I’m constantly learning, prototyping,
              and sharing what works for me.
            </p>

            <h4 className="text-white font-semibold mt-6 mb-2">When I’m not iterating on a design, you’ll find me:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Teaching design principles to up-and-coming creatives</li>
              <li>Exploring new fabrication techniques</li>
              <li>Writing/talking about the crossover between physical craftsmanship and digital UX</li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
            <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
              <img src={icon} alt="Check Chat Icon" className="w-10 mt-1 h-10 object-contain" />
              Let's Connect
            </button>
              <a href="/resume.pdf" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition" download>
            
                <FaFolder className="text-[#1976D2]" />
                Download Resume
              
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Related Post</h3>
          <p className="text-gray-400 mb-6 max-w-xl">
            Quick dives that riff on themes from my journey—extra insights, behind-the-scenes nuggets, and conversations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src={img1} alt="Post 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">My Journey into Product Design</h4>
                <p className="text-sm text-gray-400 mt-1">From sewing Ankara patterns to shipping intuitive apps</p>
                <a href="/journal/my-journey-into-product-design">
                <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 "><span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] " >
                                  <FaArrowLeftLong className="text-black ml-1 " />
                                  </span>
                
                                    View More
                                  </button>
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src={img2} alt="Post 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Favourite — Branding + Ecommerce Case Study</h4>
                <p className="text-sm text-gray-400 mt-1">A Gen Z-powered brand meets product strategy</p>
                <a href="/work/favourite-branding-+ecommerce-case-study">
                <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 "><span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] " >
                  <FaArrowLeftLong className="text-black ml-1 " />
                  </span>

                    View More
                  </button>
                </a>
                
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src={img3} alt="Post 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Desire Paths in Product Design</h4>
                <p className="text-sm text-gray-400 mt-1">Mapping the shortcuts users already take</p>
                <a href="/journal/desire-paths-in-product-design">

                <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 "><span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] " >
                  <FaArrowLeftLong className="text-black ml-1 " />
                  </span>

                    View More
                  </button>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
