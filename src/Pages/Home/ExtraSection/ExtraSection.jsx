import trophie1 from "../../../assets/trophies/trophie (3).jpg";
import trophie2 from "../../../assets/trophies/trophie (2).jpg";
import trophie3 from "../../../assets/trophies/trophie (1).jpg";
import trophie4 from "../../../assets/trophies/trophie (4).jpg";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
  return (
    <div className="">
      <div className="my-6">
        <RoutesTitel
          subHeading={"WHAT'S TRENDING"}
          heading={"latest team trophies"}
        ></RoutesTitel>
      </div>
      <Marquee pauseOnClick={true}>
        <div className="flex items-center gap-8 mb-20 mt-8">
          <div className="w-full p-4  hover:border-b-4 border-purple-500 ">
            <h3 className="uppercase text-xl font-bold">Seasson 2023</h3>
            <img
              src={trophie1}
              alt="trophie"
              className="h-44 w-40 object-cover"
            />
          </div>
          <div className="p-6 w-full hover:border-b-4 border-purple-500">
            <h3 className="uppercase text-xl font-bold">seasson 2022</h3>
            <img
              src={trophie2}
              alt="trophie"
              className="h-44 w-40 object-cover"
            />
          </div>
          <div className="p-6 w-full hover:border-b-4 border-purple-500">
            <h3 className="uppercase text-xl font-bold">seasson 2021</h3>
            <img
              src={trophie3}
              alt="trophie"
              className="h-44 w-40 object-cover"
            />
          </div>
          <div className="p-6 w-full hover:border-b-4 border-purple-500">
            <h3 className="uppercase text-xl font-bold">seasson 2020</h3>
            <img
              src={trophie4}
              alt="trophie"
              className="h-44 w-40 object-cover"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ExtraSection;
