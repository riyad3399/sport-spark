// const scrollToTopElement = document.createElement("div");
// scrollToTopElement.classList.add("scrollTop");

// scrollToTopElement.innerHTML = `<button>click</button>
// `;

// const footerElement = document.querySelector(".footer-section");

// footerElement.after(scrollToTopElement);

import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaTrash } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/axiosSecure";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const itemsPerPage = 10; // Adjust the number of items per page here

  const pageCount = Math.ceil(users.length / itemsPerPage);

  const displayedUsers = users.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleDelete = (user) => {
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
        fetch(
          `https://sport-spark-server-riyad3399.vercel.app/users/admin/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${user.name} is Deleted`, "success");
            }
          });
      }
    });
  };


   const handleMakeAdmin = (user) => {
     fetch(
       `https://sport-spark-server-riyad3399.vercel.app/users/admin/${user._id}`,
       {
         method: "PATCH",
       }
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.modifiedCount) {
           refetch();
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${user.name} is an Admin Now`,
             showConfirmButton: false,
             timer: 1500,
           });
         }
       });
   };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://sport-spark-server-riyad3399.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full px-5">
      <Helmet>
        <title>All Users - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"Show All Users"}
        heading={"All Users"}
      ></RoutesTitel>
      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-gray-300 text-center">
            <tr>
              <th className="text-base">#</th>
              <th className="text-base">Name</th>
              <th className="text-base">Email</th>
              <th className="text-base">Role</th>
              <th className="text-base">Role</th>
              <th className="text-base">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            {displayedUsers.map((user, index) => (
              <tr key={user._id} className="text-center">
                <td className="border-b">{index + 1}</td>
                <td className="border-b">{user.name}</td>
                <td className="border-b">{user.email}</td>
                <td className="border-b">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-circle btn-md"
                    >
                      {" "}
                      <RiAdminLine
                        size={22}
                        className="text-blue-500 cursor-pointer"
                      />
                    </button>
                  )}
                </td>
                {user.role !== "admin" ? (
                  <td className="border-b">
                    {user.role === "instructor" ? (
                      "instructor"
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost btn-circle btn-md"
                      >
                        {" "}
                        <FaChalkboardTeacher
                          size={22}
                          className="text-blue-500 cursor-pointer"
                        />
                      </button>
                    )}
                  </td>
                ) : (
                  <td className="border-b"></td>
                )}
                <td className="border-b">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-circle btn-ghost btn-md hover:bg-red-200"
                  >
                    {" "}
                    <FaTrash size={20} className="text-red-500" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default AllUsers;

