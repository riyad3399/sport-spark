import { useEffect, useState } from "react";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularClasses(data);
      });
  }, []);

  return (
    <div>
      <RoutesTitel
        subHeading={"Top 6 Popular classes"}
        heading={"top classes"}
      ></RoutesTitel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {popularClasses.slice(0, 6).map((data) => (
          <ClassesCard key={data._id} data={data}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
