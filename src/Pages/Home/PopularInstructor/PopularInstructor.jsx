import { useEffect, useState } from "react";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import InstructorCard from "../../../Components/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/usersdata/instructor")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularInstructor(data);
      });
  }, []);
    
    const datas = popularInstructor.filter(popularIns => popularIns.role === "instructor")

  return (
    <div>
      <RoutesTitel
        subHeading={"Top 6 popular Instructor"}
        heading={"popular instructor"}
          ></RoutesTitel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {
                  datas.slice(0, 6).map(data => <InstructorCard key={data._id} data={data}></InstructorCard>)
              }
          </div>
    </div>
  );
};

export default PopularInstructor;
