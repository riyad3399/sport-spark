import { useEffect, useState } from "react";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
      });
  }, []);

  return (
    <div className="pt-12 pb-5">
      <h3 className="text-center font-bold text-4xl my-5">All Classes </h3>
      <div className="grid md:grid-cols-1 gap-8">
      {classData.map((data) => (
        <ClassesCard key={data._id} data={data}></ClassesCard>
      ))}
      </div>
    </div>
  );
};

export default Classes;
