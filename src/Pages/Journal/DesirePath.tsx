import { FaCalendarAlt, FaClock } from "react-icons/fa";
import img from "../../assets/jfull.png"

const DesirePath=() => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm mb-2 mt-20 ">
          <a href="/">Home</a> / <a href="/Journal">Journal</a> /{" "}
          <span className="font-semibold text-white">
          Desire Paths in Product Design
          </span>
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold leading-snug mt-4 md:mt-20">
          My Journey into Product Design: From Cloth Sketches to Crafting Digital Solutions
        </h1>
        <p className="text-white text-sm mt-2">
          From sewing Ankara patterns to shaping intuitive apps—my path from tactile craft to digital product design.
        </p>

        <div className="flex items-center text-xs text-gray-500 gap-4 mt-4">
          <div className="flex items-center gap-1">
            <FaClock className="text-[#1976D2]" /> <span>4 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-[#1976D2]" /> <span>Aug 16, 2024</span>
          </div>
        </div>

        <img
          src={img}
          alt="Author"
          className="rounded-xl w-[300px] h-[300px] object-cover mt-6"
        />

        <div className="prose prose-invert max-w-none mt-8 text-sm sm:text-base leading-relaxed">
          <h2 className="font-bold" >Introduction</h2>
          <p>
          My journey into the world of design began long before I knew what “product design” truly meant. It started in secondary school, where I would spend hours on apps like PicsArt, designing clothes, creating flyers, and exploring various forms of visual creativity. Little did I know that these early experiences would lay the foundation for a career that blends my passion for creativity with problem-solving.
          </p>

          <h2 className="font-bold mt-5 ">Early Exposure to Design</h2>
          <p>
          After finishing secondary school, I didn’t immediately jump into the digital design world. Instead, I pursued fashion design, apprenticing at a local tailoring store in Ajegunle, a vibrant neighborhood in Lagos, Nigeria. This experience was more than just learning to sew; it was about understanding the intricacies of creating something from scratch, whether it was a garment or a pair of shoes. My interest in learning new skills led me to enroll in a local government-organized skill acquisition program, where I learned shoemaking.
These experiences nurtured my innate curiosity and love for creating products, whether tangible or digital. They also taught me the importance of hands-on learning and the value of craftsmanship, lessons that have stayed with me as I transitioned into product design.

          </p>

          <h2 className="font-bold mt-5 ">Inspiration to Become a Product Designer</h2>
          <p>
          When I began studying Structural Engineering at the University of Benin, I was faced with a dilemma that many creative minds encounter: the challenge of choosing a single path. Throughout my university years, I dabbled in various interests, from engineering to fashion, and even furniture design. Specializing in one area felt limiting, and I often found myself overthinking and questioning my direction.
It wasn’t until my final year that I had a breakthrough. After much reflection, I realized that my true passion lay in designing products — whether they were apps, clothes, or furniture. The common thread in all my interests was the process of creating something that served a purpose and solved a problem. Around this time, the fields of UX/UI and product design were gaining traction, and I knew that this was the direction I wanted to take.

          </p>

          <h2  className="font-bold mt-5 ">My Design Philosophy: Desire Paths</h2>
          <p>
          Determined to pursue product design, I began by watching countless YouTube videos to understand what a product designer does. While most of the content focused on digital products, I quickly realized that the principles behind designing digital products could be applied to physical products as well, with some adaptations. This insight led me to enroll in the Product Designer Diploma program at AltSchool Africa.
Throughout my learning journey, I absorbed everything I could about the design process, user experience, and the tools of the trade. But beyond the technical skills, I developed a design philosophy that has become central to my approach: the concept of Desire Paths.

          </p>

          <h2 className="font-bold mt-5 ">Current Focus and Future Aspirations</h2>
          <p>
          Today, my focus is on building products that solve real-life problems, whether they exist in the digital or physical realm. I’m continually learning new skills and staying updated with industry trends to ensure that my designs are not only relevant but also innovative.
As the product design industry evolves, I am committed to adapting and growing with it. My goal is to leverage my diverse background — from fashion design to structural engineering — to create products that are not only functional but also beautifully crafted and user-centered.


          </p>

          <h2 className="font-bold mt-5 ">Conclusion</h2>
          <p>
          My journey into product design has been anything but linear. From sketching clothes in secondary school to crafting digital solutions today, each step has been a learning experience that has shaped my approach to design. As I continue to grow as a product designer, I remain passionate about creating products that resonate with users and solve real problems. I look forward to what the future holds, and I am excited to contribute to an industry that is ever-evolving and full of possibilities.
          </p>
        </div>

        <div className="mt-12 text-right">
          <button
            className="text-sm flex items-center gap-1 text-gray-400 hover:text-white ml-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go Back Up ↑
          </button>
        </div>
      </div>
    </section>
  );
}


export default DesirePath