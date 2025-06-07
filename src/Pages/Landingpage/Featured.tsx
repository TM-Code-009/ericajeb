import img1 from "../../assets/featured1.png"
import img2 from "../../assets/featured2.png"
import img3 from "../../assets/featured3.png"
import { FaArrowLeftLong } from "react-icons/fa6";

const projects = [
    {
      title: "Favourite — Branding + eCommerce Case Study",
      description:
        "I turn early-stage ideas into polished experiences—leveraging AI, design systems, and no-code tooling to help startups launch fast and enterprises innovate faster.",
      image: img1,
      url:"/work/favourite-branding-+ecommerce-case-study"
    },
    {
      title: "Work I Did for Ajebsanty (2017 – 2024)",
      description:
        "I turn early-stage ideas into polished experiences—leveraging AI, design systems, and no-code tooling to help startups launch fast and enterprises innovate faster.",
      image: img2,
      url:"/work/work-i-did-for-ajebsanty"
    },
    {
      title: "Ai Agent - TailorAI",
      description:
        "Designing a universal AI-agent pattern through the lens of a Lagos tailor.",
      image: img3,
      url:"/work/ai-agent-tailor-ai"
    },
  ];
  
  const Featured = () => {
    return (
      <section id="work" className="w-full px-6 py-16 bg-[#0d0d0d] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Featured Projects</h2>
          <p className="text-gray-400 mb-10">A spotlight on my most game-changing build</p>
  
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 bg-[#121212] p-4 rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-[250px] rounded-3xl object-cover"
                />
  
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href={project.url}>
                  <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 "><span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] " >
                  <FaArrowLeftLong className="text-black ml-1 " />
                  </span>

                    View More
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Featured;
  