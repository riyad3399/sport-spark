import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const ViewMyClasses = () => {
  const { user } = useAuth();
  const [viewClasses, setViewClasses] = useState([]);
  useEffect(() => {
    fetch(`https://sport-spark-server-riyad3399.vercel.app/instructor-classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setViewClasses(data);
      });
  }, [user]);

  const handelDeleteClass = (viewClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-spark-server-riyad3399.vercel.app/instructor-classes/${viewClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Deleted your class", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>My classes - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"my all classes"}
        heading={"my classes"}
      ></RoutesTitel>
      <h3 className="text-3xl font-medium px-5 my-4">
        Total Classes: {viewClasses.length}
      </h3>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Instructor Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewClasses.map((viewClass, index) => (
              <tr key={viewClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={viewClass.pictureURL} alt="Photo" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{viewClass.instructorName}</td>
                <td>{viewClass.subCategory}</td>
                <td>{viewClass.status}</td>
                <th>
                  <button
                    onClick={() => handelDeleteClass(viewClass)}
                    className="btn btn-ghost btn-circle hover:bg-red-200"
                  >
                    <FaTrash size={22} className="text-red-500 " />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMyClasses;
