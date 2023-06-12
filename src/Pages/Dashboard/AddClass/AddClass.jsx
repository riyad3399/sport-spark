import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/axiosSecure";
import { Helmet } from "react-helmet-async";
import RoutesTitel from "../../../Components/RoutesTitle/RoutesTitle";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const handleClassAdded = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const pictureURL = form.pictureURL.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const subCategory = form.subCategory.value;
    const price = parseFloat(form.price.value);
    const availableQuantity = parseInt(form.availableQuantity.value);
    const enrolled = 0;
    const status = "pending";
    const feedback = "";
    const classDetails = {
      name,
      pictureURL,
      instructorName,
      instructorEmail,
      subCategory,
      price,
      availableQuantity,
      enrolled,
      status,
      feedback,
    };

    axiosSecure.post("/classes", classDetails).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-full px-8 min-h-screen">
      <Helmet>
        <title>Add class - Sport Spark</title>
      </Helmet>
      <RoutesTitel
        subHeading={"new class added"}
        heading={"Add class"}
      ></RoutesTitel>
      <div className="border-2 p-10 rounded-lg hover:shadow-2xl hover:border-none">
        <form onClick={handleClassAdded}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || user?.name}
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">pictureURL</span>
              </label>
              <input
                type="url"
                name="pictureURL"
                required
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                name="instructorName"
                required
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                name="instructorEmail"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-3 items-center">
            <div className="form-control w-full">
              <label className="label">Select Your Category</label>
              <select
                className="select select-bordered"
                required
                name="subCategory"
              >
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="volleyball">Volleyball</option>
                <option value="golf">Golf</option>
                <option value="cricket">Cricket</option>
                <option value="rugby">Rugby</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                required
                name="price"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available Seat</span>
              </label>
              <input
                type="number"
                required
                name="availableQuantity"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add a Class"
            className="btn btn-success w-full mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
