import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { TextField } from "@mui/material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  // console.log('location ',from)
  console.log("location",from)





  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        setErrorMessage("");
        reset();
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          confirmButtonText: "ok",
        });
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2 py-8">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <div>
                <TextField
                  id="outlined-email-input"
                  label="email"
                  type="email"
                  variant="outlined"
                  className="text-blue-500 w-full "
                  {...register("email", { required: true })}
                />
              </div>
              <div className=" relative ">
                <TextField
                  id="outlined-password-input"
                  label="password"
                  className="w-full text-blue-500"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                />
                <p
                  onClick={handleShowPass}
                  className="absolute top-[18px] right-3"
                >
                  {" "}
                  {showPassword ? (
                    <FaEye className="text-blue-500" size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
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
              <SocialLogin></SocialLogin>
              <p className="text-center mt-3">
                sport spark new? Go{" "}
                <NavLink className="text-blue-500 font-semibold" to="/signup">
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
