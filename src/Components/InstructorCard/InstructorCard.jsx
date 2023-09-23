import useAuth from "../../hooks/useAuth";

const InstructorCard = ({ data }) => {
  // console.log(data);
  const { user } = useAuth();
  const { name, image, email, phone } = data;
  return (
    <div className="w-full">
      <div className="card card-side bg-base-100 shadow-xl group">
        <div className="lg:w-1/2 ">
          <img src={image} className=" h-full group-hover:scale-95 hover:rounded-md transition" alt="instructor" />
        </div>
        <div className="card-body w-1/2 px-3">
          <h2 className="card-title font-bold">{name}</h2>
          <p className=" font-medium">
            Email:
            <span className="text-blue-500">{email}</span>
          </p>
          {user?.phone && <p className=" font-medium">
            Phone:
            <span className="text-blue-500">{phone}</span>
          </p>}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
