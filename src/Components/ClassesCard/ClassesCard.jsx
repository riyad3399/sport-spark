import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ data }) => {
  const { name, instructor, availableSeats, price, image, _id } = data;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = (item) => {
    console.log(item);
    if (user && user.email) {
      const selectClass = {selectClassId: _id, name, instructor, availableSeats, price, image, email: user.email}
      fetch("http://localhost:5000/select-class", {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectClass)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
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
          navigate('/login', {state: {from: location}})
        }
      });
    }
  };

  return (
    <div className="">
      <div className="card w-96 bg-base-100 hover:shadow-2xl border-2 hover:border-none  hover:scale-105 duration-200">
        <figure className="px-8 pt-8">
          <img src={image} alt="sports" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg font-medium">
            Instructor: <span className="text-blue-500">{instructor}</span>
          </p>
          <p className="text-lg font-medium">
            AvailableSeats:{" "}
            <span className="text-blue-500">{availableSeats}</span>
          </p>
          <p className="text-lg font-medium">
            Price: <span className="text-blue-500">{price}</span>
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
