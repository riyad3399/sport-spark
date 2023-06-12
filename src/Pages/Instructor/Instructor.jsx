import { useEffect, useState } from "react";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructorData, setInstructorData] = useState([]);
  console.log(instructorData);

  useEffect(() => {
    fetch("https://sport-spark-server-riyad3399.vercel.app/usersdata/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructorData(data);
      });
  }, []);

  const datas = instructorData?.filter(
    (instructor) => instructor.role === "instructor"
  );

  return (
    <div className="pt-12">
      <Helmet>
        <title>Instructor - Sport Spark</title>
      </Helmet>
      <div className="grid md:grid-cols-2 gap-5">
        {datas?.map((data) => (
          <InstructorCard key={data._id} data={data}></InstructorCard>
        ))}

      </div>
    </div>
  );
};

export default Instructor;
