import { Helmet } from "react-helmet-async";
import regesterImg from "../../assets/register.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
          console.log(loggedUser);
          Swal.fire({
            title: 'Sign up successful',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
            `
          })
          updateUserProfile(data.name, data.photo)
          .then(() => {})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Signup - Sport Spark</title>
          </Helmet>
          <h1 className="text-3xl text-center my-4 font-semibold">Sign up Now!</h1>
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2 sm:w-full">
            <img src={regesterImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 sm:w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  {...register("confirm", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo URL"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="signup"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
