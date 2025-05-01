import NavBar from "./components/NavBar"
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* if we dont have the experience working with the company that are displayed at the bottom we can remove this logoSection */}
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App