import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ExtraSection from "../ExtraSection/ExtraSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - Sport Spark</title>
      </Helmet>
      <Banner></Banner>
      <div data-aos="fade-down-right">
        <PopularClasses></PopularClasses>
      </div>
      <div data-aos="zoom-out-up">
        <PopularInstructor></PopularInstructor>
      </div>
      <div data-aos="zoom-in-down">
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
