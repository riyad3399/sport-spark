import {  IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import { HiBookOpen } from "react-icons/hi";
const AdminHomeUserData = () => {
//   const [total, setTotal] = useState({});
 

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <BoxWrapper>
        <div className="rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-2 lg:pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sels</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
             $40
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-2 lg:pl-4">
          <span className="text-sm text-gray-500 font-light">Total Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
             50
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-2 lg:pl-4">
          <span className="text-sm text-gray-500 font-light">Total Enroll</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
             89
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center bg-cyan-600">
          <HiBookOpen className="text-2xl text-white" />
        </div>
        <div className="pl-2 lg:pl-4">
          <span className="text-sm text-gray-500 font-light">Total Class</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
             30
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default AdminHomeUserData;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
