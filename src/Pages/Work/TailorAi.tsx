import { FaCalendarAlt, FaFolder } from "react-icons/fa";
import heroImg from "../../assets/work7.png"; 
import screensImg from "../../assets/work8.png";
import work9 from "../../assets/work9.png";
import work10 from "../../assets/work10.png";
import work11 from "../../assets/work11.png";
import work12 from "../../assets/work12.png";
import work13 from "../../assets/work13.png";
import icon from "../../assets/heroicon.png";

const TailorAi = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 mb-2 mt-20 ">
        <a href="/">Home</a> / <a href="/work">Work</a> / <span className="font-semibold text-white">TailorAI</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mt-4 md:mt-20 ">Ai Agent - TailorAI</h1>
        <p className="text-sm text-gray-300 mt-1">
          Designed an autonomous AI agent to power through the needs of a Lagos tailor
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
          <FaCalendarAlt className="text-[#1976D2]" />
          May 16, 2025
        </div>

        <div className="my-8">
          <img
            src={heroImg}
            alt="TailorAI mockup"
            className="rounded-md w-full object-contain"
          />
        </div>

        <div className="text-sm sm:text-base leading-relaxed space-y-6 text-white">
          <div>
            <h2 className="font-semibold mb-1">The spark</h2>
            <p>
              While shadowing Oju Adeyemi, a bespoke tailor in Lagos, I watched him flip between WhatsApp,
              Excel and Gmail just to book a simple bridal fitting. The friction felt universal: swap “tailor” for
              “photographer” or “lawyer” and the pain remains. So I framed the project as “one AI agent
              interface that anyone can adopt, proven first in a tailor’s studio.”
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">Product vision</h2>
            <p>
              Conversational first, context-rich always, tool-powered when it counts.
              The agent should remember the business’s DNA (mission, price rules, tone of voice) and wield the
              right external tool—Docs, Sheets, Mail, Calendar—without the user breaking flow.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">Key screens & the stories they tell</h2>

            <div className="mt-4">
              <h3 className="font-semibold mb-1">Join</h3>
              <p>
                <strong>Sign-up & OAuth:</strong> A single card lets users log in via Email, Google or Apple in <strong>10 s.</strong>
                A micro-copy line covers Terms & Privacy so legal is satisfied without killing momentum.
              </p>

              <div className="my-6">
                <img
                  src={screensImg}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Talk</h3>
              <p>
                <strong>Conversation hub:</strong> Oju chats—“Make a ball-gown measurement sheet for Adaeze at 2 p.m.”
                The agent answers with two buttons—Download PDF or Open Sheet—instantly delivering both formats.
              </p>
            </div>
          </div>
        </div>

        <div className="my-6">
                <img
                  src={work9}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
        </div>

        <div>
              <h3 className="font-semibold mb-1">Automate</h3>
              <p>
                <strong>Smart-action modal</strong>On “Draft an email… attach the invoice…” the agent composes subject/body, shows a preview and a single Send CTA. One tap pipes it through Gmail’s API; confirmation appears inline.
              </p>
            </div>

            <div className="my-6">
                <img
                  src={work10}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
        </div>

        <div>
              <h3 className="font-semibold mb-1">Remember</h3>
              <p>
                <strong>Memories manager</strong>A dashboard of cards—Brand Voice, Measurement Standards, Pricing Terms—stores evergreen knowledge. Any card can be edited or pinned; the vector store is queried before every reply.
              </p>
            </div>

            <div className="my-6">
                <img
                  src={work11}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
        </div>

        <div>
              <h3 className="font-semibold mb-1">Track</h3>
              <p>
                <strong>Notifications & History</strong>Auto-logged emails, reminders and tasks create an audit trail—“Invoice sent”, “Fabric shipped”, “Fitting today @ 2 pm”.
              </p>
        </div>

        <div className="my-6">
                <img
                  src={work12}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
        </div>

        <div>
              <h3 className="font-semibold mb-1">Control</h3>
              <p>
                <strong>Profile & Settings</strong>Users choose dark/light, language and can nuke all chats or the entire account—full data agency built in.
              </p>
        </div>

        <div className="my-6">
                <img
                  src={work13}
                  alt="TailorAI login screens"
                  className="rounded-md w-full object-cover"
                />
        </div>

        <div className="flex gap-5 flex-col " >
              <h3 className="font-semibold mb-1">A pattern anyone can steal</h3>
              <p>
              Because memories are just JSON cards and tools are pluggable APIs, the same skeleton serves a baker tracking custom-cake orders or a freelancer handling proposals. Swap the memory templates and you’re live.
              </p>
              
              <h3 className="font-semibold mb-1">What I’d iterate next</h3>

              <ul className="list-decimal list-inside" >
                <li>Voice input for hands-busy professionals.</li>
                <li>Marketplace of tool plugins—Stripe, QuickBooks, Trello.</li>
                <li>Metrics dashboard showing time saved & revenue unlocked.</li>
              </ul>

        </div>

        <div className="flex flex-col h-[200px] w-full gap-5 justify-center items-center" >

            <p  className="font-bold" >Curious how this pattern could fit your workflow?</p>

            <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://wa.link/qksx5g">
              <button className="flex h-[40px] items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
              <img src={icon} alt="Check Chat Icon" className="w-10 mt-1 h-10 object-contain" />
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

export default TailorAi;
