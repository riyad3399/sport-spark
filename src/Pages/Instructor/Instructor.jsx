import { useEffect, useState } from "react";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructorData, setInstructorData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/usersdata/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructorData(data);
      });
  }, []);

  const datas = instructorData?.filter(
    (instructor) => instructor.role === "instructor"
  );

  return (
    <div className="py-12">
      <Helmet>
        <title>Instructor - Sport Spark</title>
      </Helmet>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {datas?.map((data) => (
          <InstructorCard key={data._id} data={data}></InstructorCard>
        ))}

      </div>
    </div>
  );
};

export default Instructor;
