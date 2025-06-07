import AboutMe from "./Aboutme"
import Client from "./Clients"
import Featured from "./Featured"
import Footer from "./Footer"
import Hero from "./Hero"
import Stacks from "./Stacks"


const Landingpage = () => {
  return (
    <div>
       <Hero/>
       <Featured/>
       <Stacks/>
       <Client/>
       <AboutMe/>
       <Footer/>
    </div>
  )
}

export default Landingpage