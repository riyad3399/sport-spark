import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookmarkButton from "../shared/BookmarkButton";

const ClassesCard = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const {
    name,
    pictureURL,
    instructorName,
    price,
    enrolled,
    availableQuantity,

    _id,
  } = data;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, , refetch] = useCart();

  const handleSelectClass = (item) => {
    setButtonDisabled(true);
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
      fetch("https://sport-spark-server-riyad3399.vercel.app/select-class", {
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
    <div>
      <div className="card w-full shadow-xl group">
        <figure className="px-8 pt-8">
          <img
            src={pictureURL}
            alt="classes"
            className="rounded-lg group-hover:scale-105 transition relative"
          />
          <span className="absolute top-6 right-5">
            <BookmarkButton data={data} />
          </span>
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">
            {name}
            {enrolled && <div className="badge badge-warning">popular</div>}
          </h2>

          <p className="text-lg">
            Instructor Name:{" "}
            <span className="text-blue-500 ">{instructorName}</span>
          </p>
          <p className="text-lg">
            Avaiable Seats:{" "}
            <span className="text-blue-500">{availableQuantity}</span>
          </p>
          <p className="text-lg">
            Price: <span className="text-blue-500">{price}</span>
          </p>
          <p className="text-lg">
            Enrolled: <span className="text-blue-500">{enrolled}</span>
          </p>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectClass(data)}
              disabled={buttonDisabled}
              className="btn btn-outline bg-slate-200 w-2/6 border-b-4 border-t-0 border-x-0"
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
