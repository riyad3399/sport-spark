import useAuth from "../../hooks/useAuth";

const InstructorCard = ({ data }) => {
  // console.log(data);
  const { user } = useAuth();
  const { name, image, email, phone } = data;
  return (
    <div className="w-full">
      <div className="card card-side bg-base-100 hover:shadow-2xl border-2 hover:border-none w-full ">
        <div className="w-1/2">
          <img src={image} className="rounded-lg h-full" alt="Movie" />
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
