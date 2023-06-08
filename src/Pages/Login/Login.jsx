import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, loginWithGoogle } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Helmet>
        <title>Login - Sport Spark</title>
      </Helmet>
      <h1 className="text-4xl text-center my-5 font-semibold">Login Now!</h1>
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2 sm:w-full">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 sm:w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <p
                  onClick={handleShowPass}
                  className="absolute bottom-3 right-3"
                >
                  {" "}
                  {showPassword ? <FaEye className="text-blue-500" size={20}/> : <FaEyeSlash size={20}/>}
                </p>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <div className="divider">OR</div>
              <div className="flex flex-row justify-center gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-primary btn-circle"
                >
                  {" "}
                  <FaGoogle size={22} />{" "}
                </button>
                <button className="btn btn-outline btn-circle">
                  {" "}
                  <FaGithub size={22} />{" "}
                </button>
              </div>
              <p className="text-center mt-3">
                sport spark new? Go{" "}
                <Link className="text-blue-500 font-semibold" to="/signup">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
