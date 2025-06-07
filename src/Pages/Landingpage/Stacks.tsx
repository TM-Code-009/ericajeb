import React from "react";
import icon1 from "../../assets/download__5_-removebg-preview.png"
import icon2 from "../../assets/download__6_-removebg-preview.png"
import icon3 from "../../assets/download__7_-removebg-preview.png"
import icon4 from "../../assets/download (5).png"
import icon5 from "../../assets/download__3_-removebg-preview (1).png"
import icon6 from "../../assets/download__9_-removebg-preview.png"
import icon7 from "../../assets/651f24a499bc8356ba844e0c_Webflow-Logo.svg"
import icon8 from "../../assets/download__3_-removebg-preview (2).png"
import icon9 from "../../assets/download (5).jpg"


const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe Illustrator", icon: icon1},
  { name: "Adobe Photoshop", icon: icon2 },
  { name: "Framer", icon: icon3 },
  { name: "Adobe After Effects", icon: icon4 },
  { name: "Adobe Premier Pro", icon:icon5 },
  { name: "GPT", icon: icon6 },
  { name: "WordPress", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" },
  { name: "Webflow", icon: icon7 },
  { name: "Rive", icon: icon8 },
  { name: "Clo3d", icon: icon9 },
  { name: "Blender", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" },
];

const Stacks: React.FC = () => {
  return (
    <section id="stacks" className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stacks</h2>
        <p className="text-gray-300 text-base sm:text-lg mb-10">
          A curated lineup of the design, code, and AI tools that power my work
        </p>

        <div className="w-full flex flex-wrap gap-4 justify-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-md"
              title={tool.name}
              aria-label={tool.name}
            >
              <img
                src={tool.icon}
                alt={`${tool.name} logo`}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
