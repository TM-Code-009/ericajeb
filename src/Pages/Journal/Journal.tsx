import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../../assets/journal1.png";
import img2 from "../../assets/journal2.png"
import img3 from "../../assets/journal3.png"


interface JournalEntry {
  image: string;
  title: string;
  description: string;
  url:string
}

const entries: JournalEntry[] = [
  {
    image: img1,
    title: "My Journey into Product Design: From Cloth Sketches to Crafting Digital Solutions",
    description:
      "From sewing Ankara patterns to shaping intuitive apps—my path from tactile craft to digital product design.",
      url:"/journal/my-journey-into-product-design"
  },
  {
    image: img2,
    title: "Desire Paths in Product Design: Harnessing User Flow for Better UX",
    description:
      "Mapping the shortcuts users already take and transforming them into seamless, intuitive product flows.",
      url:"/journal/desire-paths-in-product-design"
  },
  {
    image: img3,
    title: "Everything is as it should be",
    description: "Everything is as it should be",
    url:"/journal/everything-is-as-it-should-be"
  },
];

const Journal= () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm">
          Home/<span className="font-semibold">Journal</span>
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">Journal</h1>
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          A living sketchbook of thoughts, process shots, and in-the-moment lessons
        </p>

        <div className="mt-10 space-y-10">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="rounded-xl w-full sm:w-40 h-40 object-cover"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-base sm:text-lg">{entry.title}</h2>
                <p className="text-sm text-gray-300 mt-1">{entry.description}</p>
                 <a href={entry.url}>
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

        <div className="mt-12 text-right">
          <button
            className="text-sm flex items-center gap-1 text-gray-400 hover:text-white ml-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go Back Up <FaArrowUp />
          </button>
        </div>
      </div>
    </section>
  );
}


export default Journal