import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassesCard = ({ data }) => {
  const {
    name,
    pictureURL,
    instructorName,
    instructorEmail,
    subCategory,
    price,
    enrolled,
    availableQuantity,
    feedback,
    status,
    _id,
  } = data;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, , refetch] = useCart();

  const handleSelectClass = (item) => {
    console.log(item);
    if (user && user.email) {
      const selectClass = {
        selectClassId: _id,
        name,
        instructorName,
        availableQuantity,
        price,
        pictureURL,
        email: user.email,
      };
      fetch("http://localhost:5000/select-class", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "selected your class",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to select this class",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="">
      <div className="card card-side w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none  hover:scale-105 duration-300">
        <figure className="w-1/2">
          <img className="h-full w-full" src={pictureURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Name: <span className="text-blue-500"> {name}</span>
          </h2>
          <p className="text-lg font-semibold">
            {" "}
            Instructor Name:  <span className="text-blue-500">{instructorName}</span>{" "}
           
          </p>
          <p className="text-lg font-semibold">
            {" "}
            Instructor Email: <span className="text-blue-500">{instructorEmail}</span>{" "}
            
          </p>
          <p className="text-lg font-semibold">
            {" "}
            SubCategory: <span className="text-blue-500">{subCategory}</span>{" "}
            
          </p>
          <p className="text-lg font-semibold">
            {" "}
            Price: <span className="text-blue-500">{price}</span>{" "}
            
          </p>
          <p className="text-lg font-semibold">
            {" "}
            Enrolled: <span className="text-blue-500">{enrolled}</span>{" "}
             
          </p>
          <p className="text-lg font-semibold">
            {" "}
            Available Seat: <span className="text-blue-500">{availableQuantity}</span>{" "}
             
          </p>
          <p className="text-lg font-semibold">
            {" "}
            Status: <span className="text-blue-500">{status}</span>{" "}
            
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectClass(data)}
              className="btn btn-primary"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
