import { useEffect, useState } from "react";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [manageClass, setManageClass] = useState([]);
  useEffect(() => {
    fetch("https://sport-spark-server-riyad3399.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setManageClass(data);
      });
  }, []);

  const handleStatus = (mClass) => {
    fetch(`https://sport-spark-server-riyad3399.vercel.app/classes/${mClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Approve Your Class",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full min-h-screen my-10">
      <RoutesTitel
        subHeading={"All manage classes"}
        heading={"Manage Class"}
      ></RoutesTitel>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Instructor email</th>
              <th>Instructor Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageClass.map((mClass, index) => (
              <tr key={mClass._id}>
                <td>{index + 1}</td>
                <td>{mClass.instructorEmail}</td>
                <td>{mClass.instructorName}</td>
                <td>{mClass.status}</td>
                <td>
                  {mClass.status === "accept" ? (
                    <button
                      onClick={() => handleStatus(mClass)}
                      className="btn btn-circle"
                    >
                      <FaCheckCircle className="text-green-500" size={22} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus(mClass)}
                      className="btn btn-circle"
                    >
                      <FaCheckCircle className="text-yellow-400" size={22} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
