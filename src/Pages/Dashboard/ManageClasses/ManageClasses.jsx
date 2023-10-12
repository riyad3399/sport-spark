import { useEffect, useState } from "react";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import ReactPaginate from 'react-paginate';

const ManageClasses = () => {
  const [manageClass, setManageClass] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const classesPerPage = 10; // Number of classes per page

  // Calculate the range of classes to display on the current page
  const startIndex = pageNumber * classesPerPage;
  const endIndex = startIndex + classesPerPage;
  const displayedClasses = manageClass.slice(startIndex, endIndex);

  const pageCount = Math.ceil(manageClass.length / classesPerPage);

  useEffect(() => {
    fetch("https://sport-spark-server-riyad3399.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setManageClass(data);
      });
  }, []);

  const handleStatus = (mClass) => {
    fetch(
      `https://sport-spark-server-riyad3399.vercel.app/classes/${mClass._id}`,
      {
        method: "PATCH",
      }
    )
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

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-full min-h-screen my-10">
      <RoutesTitel
        subHeading={"All manage classes"}
        heading={"Manage Class"}
      ></RoutesTitel>
      <div className="overflow-x-auto px-5 mt-4">
        <h3 className="mt-8 mb-4 md:text-2xl font-semibold">Total All Classes: { displayedClasses.length}</h3>
        <table className="table ">
          <thead className="bg-gray-300 text-center">
            <tr>
              <th className="text-base">#</th>
              <th className="text-base">Instructor email</th>
              <th className="text-base">Instructor Name</th>
              <th className="text-base">Status</th>
              <th className="text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedClasses.map((mClass, index) => (
              <tr key={mClass._id} className="text-center border">
                <td className="border-b">{startIndex + index + 1}</td>
                <td className="border-b">{mClass.instructorEmail}</td>
                <td className="border-b">{mClass.instructorName}</td>
                <td className="border-b">{mClass.status}</td>
                <td className="border-b">
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
  
      <div className="flex justify-end my-6 mr-4">
      <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex space-x-2"}
          activeClassName={"active bg-blue-500 text-white"}
          pageClassName={"rounded-full px-3 py-1 hover:bg-blue-200 cursor-pointer"}
          previousLabel={"<Previous"}
          nextLabel={"Next>"}
          previousClassName={"px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer border-2"}
          nextClassName={"px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer border-2"}
          breakLabel={"..."} 
          breakLinkClassName={"text-gray-600"} // Style the "Break" label text
        />
   </div>
    </div>
  );
};

export default ManageClasses;
