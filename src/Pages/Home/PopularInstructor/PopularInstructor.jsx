import { useEffect, useState } from "react";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import InstructorCard from "../../../Components/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch(
      "https://sport-spark-server-riyad3399.vercel.app/usersdata/instructor"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularInstructor(data);
      });
  }, []);

  const datas = popularInstructor.filter(
    (popularIns) => popularIns.role === "instructor"
  );

  return (
    <div>
      <RoutesTitel
        subHeading={"Top 6 popular Instructor"}
        heading={"popular instructor"}
      ></RoutesTitel>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  my-8">
        {datas.slice(0, 6).map((data) => (
          <InstructorCard key={data._id} data={data}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
