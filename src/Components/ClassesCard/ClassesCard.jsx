const ClassesCard = ({ data }) => {
  console.log(data);
  const { name, instructor, availableSeats, price, image } = data;
  return (
    <div>
      <div className="card w-96 bg-base-100 hover:shadow-2xl border-2 hover:border-none">
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
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
