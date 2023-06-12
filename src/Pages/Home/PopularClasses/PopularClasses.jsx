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

  const sortData = [...popularClasses]
    .slice(0, 6)
    .sort((a, b) => b.enrolled - a.enrolled);
  const topDatas = sortData.filter((data) => data.enrolled > 0);
  console.log("sort data top 6", topDatas);

  return (
    <div>
      <RoutesTitel
        subHeading={"Top 6 Popular classes"}
        heading={"top classes"}
      ></RoutesTitel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {topDatas.map((data) => (
          <ClassesCard key={data._id} data={data}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
