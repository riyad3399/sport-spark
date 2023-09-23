import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const SslPayment = () => {
  const { id } = useParams();
  console.log(id);
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.classId = id;

    fetch("/classpayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url)
        console.log(result);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-3xl text-center font-semibold my-4">
          Payment Now!
        </h3>
        <div className="rounded-lg border-2 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <input
              className="input input-bordered"
              placeholder="your name"
              {...register("name", { required: true })}
            />
            <input
              className="input input-bordered"
              placeholder="your address"
              {...register("address", { required: true })}
            />
            <select
              {...register("currency", { required: true })}
              className="select select-bordered "
            >
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="USDT">USDT</option>
            </select>
            <input
              className="input input-bordered"
              placeholder="phone number"
              {...register("phone", { required: true })}
            />
            <input
              className="input input-bordered"
              placeholder="price"
              {...register("price", { required: true })}
            />
          </div>
          <input type="submit" className="btn btn-secondary w-full mt-4" />
        </div>
      </form>
    </div>
  );
};

export default SslPayment;
