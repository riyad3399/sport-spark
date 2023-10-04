import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const InstructorCard = ({ data }) => {
  const { user } = useAuth();
  const { name, image, email, phone } = data;
  console.log(data);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" rounded-lg p-6 hover:shadow-lg transition-transform hover:border">
        <div className="relative ">
          <img
            src={image}
            className={`w-full h-auto rounded-lg ${
              isHovered ? "opacity-60" : "opacity-100"
            }`}
            alt="instructor"
          />
          {isHovered && (
            <div className="absolute bottom-4  left-4">
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="text-sm font-medium">
                Email: <span className="underline">{email}</span>
              </p>
              {user?.phone && (
                <p className="text-sm font-medium">
                  Phone: <span className="underline">{phone}</span>
                </p>
              )}

              <div className="flex justify-start mt-2">
              <button className="btn btn-info">Watch</button>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
