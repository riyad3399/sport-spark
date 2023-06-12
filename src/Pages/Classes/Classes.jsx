import { useEffect, useState } from "react";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import { Helmet } from "react-helmet-async";
import RoutesTitel from "../../Components/RoutesTitle/RoutesTitle";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch("https://sport-spark-server-riyad3399.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
        console.log('all class',data);
      });
  }, []);

  const datas = classData.filter((data) => data.status === "accept");

  return (
    <div className=" pb-5">
      <Helmet>
        <title>Classes - Sport Spark</title>
      </Helmet>
      <div className="pb-6">
      <RoutesTitel
        subHeading={"All Classes List"}
        heading={"all classes"}
      ></RoutesTitel>
      </div>
    
      <div className="grid md:grid-cols-2 gap-6">
        {datas.map((data) => (
          <ClassesCard key={data._id} data={data}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
