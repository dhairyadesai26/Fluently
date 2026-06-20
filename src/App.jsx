import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UniversityBar from './components/UniversityBar';
import Stats from './components/Stats';
import WhyEnglish from './components/WhyEnglish';
import Transformation from './components/Transformation';
import Curriculum from './components/Curriculum';
import FreeDemo from './components/FreeDemo';
import Testimonials from './components/Testimonials';
import SuccessStory from './components/SuccessStory';
import Instructors from './components/Instructors';
import Certificates from './components/Certificates';
import Community from './components/Community';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Floaters from './components/Floaters';
import LeadPopup from './components/LeadPopup';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Loader />
      <LeadPopup />
      <Floaters />
      <Navbar />
      <Hero />
      <UniversityBar />
      <Stats />
      <WhyEnglish />
      <Transformation />
      <Curriculum />
      <FreeDemo />
      <Testimonials />
      <SuccessStory />
      <Instructors />
      <Certificates />
      <Community />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
