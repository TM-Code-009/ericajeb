import { FaCalendarAlt, FaFolder} from "react-icons/fa";
import heroImg from "../../assets/work1.png";
import moodboardImg from "../../assets/work2.png"; 
import work3 from "../../assets/work3.png"; 
import work4 from "../../assets/work4.png"; 
import work5 from "../../assets/work5.png"; 
import work6 from "../../assets/work6.png"; 
import favourite from "../../assets/Favourite.png"; 
import favourite1 from "../../assets/Favourite (1).png"; 
import favourite2 from "../../assets/Favourite (2).png"; 
import icon from "../../assets/heroicon.png";

const Favourite = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 md:mb-10 mt-20">
        <a href="/">Home</a> / <a href="/work">Work</a> / <span className="font-semibold text-white">Favourite</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold">Favourite — Branding + eCommerce Case Study</h1>
        <p className="mt-2 text-sm text-white">
          A Gen-Z streetwear brand meets product strategy.
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-400 mt-3">
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-[#1976D2]" />
            May 16, 2025
          </div>
        </div>

        <div className="my-8">
          <img
            src={heroImg}
            alt="FAVOURITE logo"
            className="rounded-md w-full object-contain"
          />
        </div>

        <div className="text-sm sm:text-base leading-relaxed space-y-6 text-white">
          <div>
            <h2 className="font-semibold mb-1">Brand Story</h2>
            <p>
              <strong>Favourite</strong> isn’t just a name. It’s a vibe. A streetwear lifestyle brand for the culture —
              made for the bold, the expressive, and the fashion-aware Gen Z audience across Africa.
              Think custom drops, third-party collabs, and heavy lean on authenticity.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">The Problem</h2>
            <p>
              Before I joined the team, Favourite was running on vibes and DMs — no structured identity, no online
              store, and sales scattered across Instagram and WhatsApp.
            </p>
            <p className="mt-4">They needed:</p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-4">
              <li>A bold brand identity</li>
              <li>A proper digital storefront</li>
              <li>A scalable foundation for growth</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">My Role</h2>
            <p>
              I led the creative execution from scratch. No templates, no fluff:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-4 mt-4">
              <li>Brand Identity & Logo System</li>
              <li>UI/UX Design (Desktop + Mobile)</li>
              <li>eCommerce Strategy</li>
              <li>Developer Handoff & Support</li>
            </ul>
            <p className="mt-5">
              Tools I used: Figma, Illustrator
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Discovery & Moodboarding</h2>
            <p>
              We kicked off with a strategy session to understand the culture Favourite wanted to reflect.
              The outcome? A bold, Afro-urban visual direction.
            </p>

            <p className="mt-4">The moodboard blended:</p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-4">
              <li>Graffiti-style typography</li>
              <li>Cultural humor</li>
              <li>Poster aesthetics</li>
              <li>Hip-hop and streetwear energy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <img
            src={moodboardImg}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div>
            <h2 className="font-semibold mb-4 mt-10">Identity System</h2>
            <p className="mb-4" >
            I designed multiple logo directions — from clean typographic marks to playful blobs and embroidered-style icons.
            </p>
            <p>
            We landed on a system that felt fluid but iconic. Something that could live on clothing, social, packaging, and still slap on a billboard.
            </p>
          </div>

          <div className="mt-8">
          <img
            src={work3}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div>
            <h2 className="font-semibold mb-4 mt-10 ">Application to Product</h2>
            <p>
            Favourite wanted to do more than sell tees — they wanted to feel like a streetwear powerhouse.
            </p>

            <p className="mt-4">I extended the brand into apparel concepts:</p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-4">
              <li>Tees</li>
              <li>Shorts</li>
              <li>Stickers</li>
              <li>Street posters</li>
            </ul>
          </div>

          <div className="mt-8">
          <img
            src={work4}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

          <div className="mt-8">
          <img
            src={work5}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div>
            <h2 className="font-semibold mb-4 mt-10 ">eCommerce Design</h2>
            <p>
            The site was designed for a smooth drop-to-checkout experience.
            </p>

            <h2 className="font-semibold  mt-4 ">Key pages</h2>
            <ul className="  mt-4 space-y-4">
              <li>Landing Page</li>
              <li>Product Page</li>
              <li>Checkout: Fast, distraction-free, mobile-first layout</li>
            </ul>
          </div>

          <div className="mt-8">
          <img
            src={favourite}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>
    
          <div className="mt-8">
          <img
            src={favourite1}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>
    
          <div className="mt-8">
          <img
            src={favourite2}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div>
            <h2 className="font-semibold mb-4 mt-10 ">Still cooking</h2>
            <p>
            I’m designing custom clothing samples to complete this vision — because Favourite isn’t just a brand. It’s a lifestyle in the making.
            </p>
          </div>

          <div className="mt-8">
          <img
            src={work6}
            alt="Favourite moodboard"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div className="flex flex-col h-[200px] w-full gap-5 justify-center items-center" >

            <p  className="font-bold" >Thinking about building a buzz-worthy brand like Favourite Closet?</p>

            <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://wa.link/qksx5g">
              <button className="flex h-[40px] items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
              <img src={icon} alt="Check Chat Icon" className="w-10 mt-1 h-10 objsect-contain" />
              Let's Connect
            </button>
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
    </section>
  );
};

export default Favourite;
