import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/axiosSecure";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [paidClasses, setPaidClasses] = useState([]);
  const { user } = useAuth()

  useEffect(() => {
    axiosSecure.get(`/payments/${user?.email}`).then((res) => {
      console.log("from payment history", res.data);
      setPaidClasses(res.data);
    });
  }, [axiosSecure, paidClasses, user?.email]);

  const handleDeletedHistory = () => {
    fetch(`https://sport-spark-server-riyad3399.vercel.app/payments`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your History Clear all successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full ">
      <Helmet>
        <title>Payment History - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"Your Payment history"}
        heading={"Payment history"}
      ></RoutesTitel>
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold my-5 px-5">
          Total Payments: {paidClasses.length}
        </h3>
        <button onClick={handleDeletedHistory} className="btn btn-sm mr-5">
          <FaTrash size={20} /> Clear All
        </button>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-300">
            <tr>
              <th className="text-lg">#</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Status</th>
              <th className="text-lg">Total Price</th>
              <th className="text-lg">Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paidClasses.map((paidClass, index) => (
              <tr key={paidClass._id}>
                <th className="text-base">{index + 1}</th>
                <th className="text-base">{paidClass.email}</th>
                <td className="text-base">{paidClass.status}</td>
                <td className="text-base ">${paidClass.price}</td>
                <td className="text-base">{paidClass.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
