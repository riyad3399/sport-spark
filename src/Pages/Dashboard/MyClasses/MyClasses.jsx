import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const MyClasses = () => {
  const [data] = useCart();
  return (
    <div className="w-full px-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th className="text-lg">#</th>
              <th className="text-lg">Image</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Instructor</th>
              <th className="text-lg">AvailableSeats</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Action</th>
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
                        <img src={item.image} alt="sports" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center">{item.name}</td>
                <td className="font-medium text-center">{item.instructor}</td>
                <td className="font-medium text-center">
                  {item.availableSeats}
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
