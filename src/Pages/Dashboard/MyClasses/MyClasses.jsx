import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";

const MyClasses = () => {
  const [data] = useCart();
  return (
    <div className="w-full ">
      <Helmet>
        <title>Selected Classes - Sport Spark</title>
      </Helmet>
      <RoutesTitel subHeading={"Your Selected Classes"} heading={"selected classes"}></RoutesTitel>
      <div className="my-3 px-5 flex flex-row justify-between items-center">
        <h3 className="text-2xl font-semibold">My selected Classes: {data.length}</h3>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>payment</th>
              <th>sslPay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.pictureURL} alt="sports" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center">{item.name}</td>
                <td className="font-medium text-center">
                  {item.instructorName}
                </td>
                <td className="font-medium text-center ">{item.price}</td>
                <td className="font-medium text-center ">
                  <Link to={`/dashboard/payment/${item._id}`}>
                    <button  className="btn btn-sm btn-success">payment</button>
                  </Link>
                </td>
                <td>
                <Link to={`/dashboard/sslpayment/${item._id}`}>
                    <button  className="btn btn-sm btn-secondary">sslpay</button>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-ghost btn-md hover:bg-red-200 btn-circle">
                    <FaTrash size={22} className="text-red-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
