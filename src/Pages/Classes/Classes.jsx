import { useEffect, useState } from "react";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import { Helmet } from "react-helmet-async";
import RoutesTitel from "../../Components/RoutesTitle/RoutesTitle";
import ReactPaginate from "react-paginate";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page number
  const perPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
        console.log("all class", data);
      });
  }, []);

  const datas = classData.filter((data) => data.status === "accept");

  const pageCount = Math.ceil(datas.length / perPage); // Calculate total number of pages

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedData = datas.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className=" pb-5">
      <Helmet>
        <title>Classes - Sport Spark</title>
      </Helmet>
      <div className="pb-6">
        <RoutesTitel
          subHeading={"All Classes List"}
          heading={"all classes"}
        ></RoutesTitel>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {displayedData.map((data) => (
          <ClassesCard key={data._id} data={data}></ClassesCard>
        ))}
      </div>

      {/* Pagination component */}
      <div className="flex justify-end my-8">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex space-x-2"}
          activeClassName={"active bg-blue-500 text-white"}
          pageClassName={"bg-gray-200 p-2 rounded-md"}
          previousLabel={"<"}
          nextLabel={">"}
          previousLinkClassName={
            "text-blue-500 hover:bg-gray-300   btn btn-circle"
          }
          nextLinkClassName={"text-blue-500 hover:bg-gray-300 btn-circle btn"}
          breakLabel={"..."}
          breakLinkClassName={"text-gray-600"} // Style the "Break" label text
        />
      </div>
    </div>
  );
};

export default Classes;
