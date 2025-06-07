import { FaFolder } from "react-icons/fa";
import img from "../../assets/image.png";
import icon from "../../assets/heroicon.png";

const Hero = () => {
  return (
    <section id="home" className="w-full mt-20 bg-[#0d0d0d] text-white px-6 py-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Block */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Product Designer · 7 years<br />
            shipping products that move<br />
            the needle
          </h1>
          <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">
            I turn early-stage ideas into polished experiences—leveraging AI, design systems,
            and no-code tooling to help startups launch fast and enterprises innovate faster.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
              <img src={icon} alt="Check Chat Icon" className="w-10 mt-1 h-10 object-contain" />
              Let's Connect
            </button>
           <a href="/resume.pdf"
           download
           className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
           >
           
              <FaFolder className="text-[#1976D2]" />
              Download Resume
            
           </a>
          </div>
        </div>

        {/* Right Profile Image Block */}
        <div className="flex-1 max-w-sm">
          <div className="relative w-full rounded-3xl overflow-hidden">
            <img
              src={img}
              alt="Eric Ajomafuwe"
              className="w-full h-auto rounded-3xl object-cover"
            />
            {/* Optional Carousel Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Navigation (Fixed Right) */}
      <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        {[
          { label: "Home", id: "home" },
          { label: "Work", id: "work" },
          { label: "Stacks", id: "stacks" },
          { label: "Clients", id: "clients" },
        ].map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className="bg-[#1976D2] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#1565C0] transition"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Quick Facts Section */}
      <div className="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-gray-400">Role</h4>
          <p className="mt-1">
            A systems-minded generalist who blends AI, design systems & no-code tools to ship fast
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-400">Availability</h4>
          <p className="mt-1">Remote — Contract</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-400">Community</h4>
          <p className="mt-1">
            Mentored 1,000+ students across 30 universities on product thinking
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-400">Current Focus</h4>
          <p className="mt-1">
            Building AI agents & workflow automations for small businesses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
