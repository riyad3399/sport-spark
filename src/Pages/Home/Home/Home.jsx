import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ExtraSection from "../ExtraSection/ExtraSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../../../ScrollToTop/ScrollToTopButton";


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto relative">
      <Helmet>
        <title>Home - Sport Spark</title>
      </Helmet>

      <Banner></Banner>
     
        <div >
          <PopularClasses></PopularClasses>
        </div>
        <div >
          <PopularInstructor></PopularInstructor>
        </div>
        <div>
          <ExtraSection></ExtraSection>
      </div>
      <div className="absolute top-10 right-6">
        <ScrollToTopButton/>
      </div>
    </div>
  );
};

export default Home;
