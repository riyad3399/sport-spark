import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const [data] = useCart();
  return (
    <div className="w-full px-5">
      <Helmet>
        <title>Selected Classes - Sport Spark</title>
      </Helmet>
      <div className="my-3 flex flex-row justify-between items-center">
        <h3 className="text-2xl font-semibold">Total Classes: {data.length}</h3>
        <Link to='/dashboard/payment'>
        <button className="btn btn-sm btn-success">pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th className="text-sm">#</th>
              <th className="text-sm">Image</th>
              <th className="text-sm">Name</th>
              <th className="text-sm">Instructor</th>
              <th className="text-sm">AvailableSeats</th>
              <th className="text-sm">Price</th>
              <th className="text-sm">Action</th>
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
                <td className="font-medium text-center">
                  {item.availableQuantity}
                </td>
                <td className="font-medium text-center ">{item.price}</td>
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
