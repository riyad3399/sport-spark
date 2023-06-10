import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/axiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [paidClasses, setPaidClasses] = useState([]);

  useEffect(() => {
    axiosSecure.get("/payments").then((res) => {
      console.log("from payment history", res.data);
      setPaidClasses(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="w-full px-5">
          <h3 className="text-2xl font-semibold my-5">Total Payments: { paidClasses.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-300">
            <tr>
              <th className="text-lg">Email</th>
              <th className="text-lg">Status</th>
              <th className="text-lg">Total Price</th>
              <th className="text-lg">Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paidClasses.map((paidClass) => (
              <tr key={paidClass._id}>
                <th className="text-base">{paidClass.email}</th>
                <td className="text-base">{paidClass.status}</td>
                <td className="text-base">${paidClass.price}</td>
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
