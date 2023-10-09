import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

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
          confirmButtonText: "OK",
        });
        navigate(from, { replace: true });
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
    <div className="bg-[#e6f7ff] min-h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="bg-white p-8 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <h1 className="text-3xl md:text-4xl text-center font-semibold text-blue-800 mb-6">
            Welcome back!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                {...register("email", { required: true })}
                className="w-full"
              />
            </div>
            <div className="relative">
              <TextField
                id="outlined-password-input"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...register("password", { required: true })}
                className="w-full"
              />
              <p
                onClick={handleShowPass}
                className="absolute top-[18px] right-3 cursor-pointer"
              >
                {showPassword ? (
                  <FaEye className="text-purple-500" size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </p>
            </div>
            <div className="flex justify-center">
              <Button variant="contained" type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="text-center">
              <p className="mb-3">OR</p>
              <SocialLogin />
              <p className="mt-2">
                Don't have an account?{" "}
                <NavLink className="text-purple-500 font-semibold" to="/signup">
                  Sign up
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
