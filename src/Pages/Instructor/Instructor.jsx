import { useEffect, useState } from "react";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";

const Instructor = () => {
  const [instructorData, setInstructorData] = useState([]);
  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructorData(data);
      });
  }, []);
  return (
    <div className="pt-12">
          <div className="grid md:grid-cols-2 gap-5">
          {instructorData.map((data) => (
        <InstructorCard key={data._id} data={data}></InstructorCard>
      ))}
     </div>
    </div>
  );
};

export default Instructor;
