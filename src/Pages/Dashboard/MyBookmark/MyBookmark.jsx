import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";

const MyBookmark = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="overflow-x-auto w-full ">
      <Helmet>
        <title>My Bookmark - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"Your Bookmark Classes"}
        heading={"Bookmark classes"}
      ></RoutesTitel>
          <Container>
              <h3 className="font-bold text-lg mt-8">Total Bookmark: { loaderData.length}</h3>
        <table className="table mt-8">
          {/* head */}
          <thead>
            <tr className="text-center bg-gray-300">
              <th>#</th>
              <th>IMG</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Student</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loaderData?.map((data, index) => (
              <tr key={data._id} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data?.classPhoto} alt="Class" />
                    </div>
                  </div>
                </td>
                <td>{data?.className} </td>
                <td>
                  {data?.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {data?.instructorEmail}
                  </span>
                </td>
                <td>
                  {data?.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {data?.userEmail}
                  </span>
                </td>
                <td>${data?.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default MyBookmark;
