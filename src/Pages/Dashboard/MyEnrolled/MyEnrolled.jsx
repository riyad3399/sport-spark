import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";

const MyEnrolled = () => {
  const [enrollClasses, setEnrollClasses] = useState([]);
  useEffect(() => {
    fetch("https://sport-spark-server-riyad3399.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrollClasses(data);
      });
  }, []);



  return (
    <div className="w-full">
      <Helmet>
        <title>Enrolled Class - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"Our Enrolled classes"}
        heading={"enrolled class"}
      ></RoutesTitel>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Names</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollClasses.map((enrollClass, index) => (
              <tr key={enrollClass._id}>
                <th>{ index +1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={enrollClass.classesPhotos} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{ enrollClass.classNames}</td>
                <td>{ enrollClass.price}</td>
                <td>{ parseFloat(enrollClass.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolled;
