import React from "react";
import icon from "../../assets/recio logo 1.png"
import icon1 from "../../assets/Screenshot 2025-05-31 at 09.04.11.png"
import icon2 from "../../assets/Screenshot 2025-05-31 at 09.04.52.png"
import icon3 from "../../assets/CryptoHive 1.png"
import icon4 from "../../assets/Screenshot 2025-05-31 at 08.54.56 1.png"
import icon5 from "../../assets/Vector.png"
import icon6 from "../../assets/Vector (1).png"
import icon7 from "../../assets/Frame 48.png"
import icon8 from "../../assets/DapsonWhite  1.png"
import icon9 from "../../assets/Ms.EL 2.png"


const tools = [
  { name: "Recio", icon: icon },
  { name: "CareerLeap", icon: icon1},
  { name: "PaybyLeap", icon: icon2 },
  { name: "C Hive", icon: icon3 },
  { name: "Ajebsanty", icon: icon4 },
  { name: "Favourite", icon:icon5 },
  { name: "BeeAee", icon: icon6 },
  { name: "Homehive", icon: icon7  },
  { name: "Dapson", icon: icon8 },
  { name: "Ms.El", icon: icon9 },
];

const Client: React.FC = () => {
  return (
    <section id="clients" className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Clients</h2>
        <p className="text-gray-300 text-base sm:text-lg mb-10">
        Brands and founders I’ve partnered with
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

export default Client;
