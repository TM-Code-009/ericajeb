import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../../assets/featured1.png"
import img2 from "../../assets/featured2.png"
import img3 from "../../assets/featured3.png"

const projects = [
  {
    title: 'Favourite — Branding + eCommerce Case Study',
    description: 'A Gen Z-powered brand meets product strategy.',
    image: img1,
    url:"/work/favourite-branding-+ecommerce-case-study"
  },
  {
    title: 'Work I Did for Ajebsanty (2017 – 2024)',
    description: 'Ten milestone projects that shaped the brand from 2017 – 2024',
    image: img2,
    url:"/work/work-i-did-for-ajebsanty"
  },
  {
    title: 'Ai Agent - TailorAI',
    description: 'Designing a universal AI-agent pattern through the lens of a Lagos tailor',
    image: img3,
    url:"/work/ai-agent-tailor-ai"
  },
];

const Work = () => {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto mt-20 ">
        <p className="text-sm text-gray-400 mb-2"><a href="/">Home</a>/<span className="text-white font-semibold">Work</span></p>
        <h2 className="text-4xl font-bold mb-4">Work</h2>
        <p className="text-gray-300 mb-12">
          A snapshot of my craft in action—concepts, iterations, and launch-ready deliverables that show
          both the thinking and the measurable impact behind each project.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={project.image} alt={project.title} className="w-[300px] h-[200px] rounded-3xl object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
               <a href={project.url}>
                                <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 "><span className="h-[15px] w-[15px] rounded-full flex items-center  bg-[#1976D2] cursor-pointer " >
                                                 <FaArrowLeftLong className="text-black ml-1 " />
                                                 </span>
                               
                                                   View More
                                                 </button>
                                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-16 text-sm text-gray-400">
          <a href="#top" className="hover:text-white flex justify-end items-center gap-1">
            Go Back Up <span className="transform rotate-180">↑</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
