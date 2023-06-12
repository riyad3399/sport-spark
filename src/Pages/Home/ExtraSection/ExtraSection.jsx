import trophie1 from "../../../assets/trophies/trophie (3).jpg";
import trophie2 from "../../../assets/trophies/trophie (2).jpg";
import trophie3 from "../../../assets/trophies/trophie (1).jpg";
import trophie4 from "../../../assets/trophies/trophie (4).jpg";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";

const ExtraSection = () => {


  return (
    <div className="my-10">
      <div className="my-6">
        <RoutesTitel
          subHeading={"WHAT'S TRENDING"}
          heading={"latest team trophies"}
        ></RoutesTitel>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center  items-center">
        <div className="w-full p-6  hover:border-b-4 border-purple-500 ">
          <h3 className="uppercase text-xl font-bold">seasson 2023</h3>
          <img src={trophie1} alt="" />
        </div>
        <div className="p-6 w-full hover:border-b-4 border-purple-500">
          <h3 className="uppercase text-xl font-bold">seasson 2022</h3>
          <img src={trophie2} alt="" />
        </div>
        <div className="p-6 w-full hover:border-b-4 border-purple-500">
          <h3 className="uppercase text-xl font-bold">seasson 2021</h3>
          <img src={trophie3} alt="" />
        </div>
        <div className="p-6 w-full hover:border-b-4 border-purple-500">
          <h3 className="uppercase text-xl font-bold">seasson 2020</h3>
          <img src={trophie4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
