import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirm) {
      setErrorMessage("password is not matching");
      return;
    } else {
      setErrorMessage("");
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photo,
          };
          fetch("https://sport-spark-server-riyad3399.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          Swal.fire({
            title: "Sign up successful",
            width: 600,
            padding: "3em",
            color: "#716add",
            backdrop: `
            rgba(0,0,123,0.4)
          `,
          });
          updateUserProfile(data.name, data.photo).then(() => {});
          handleLogout();
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#e6f7ff] min-h-screen flex items-center justify-center">
      <Helmet>
        <title>SignUp - Sport Spark</title>
      </Helmet>
      <div className="w-full">
        <h1 className="text-4xl text-center mb-5 font-semibold">
          Sign Up Now!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-sm mx-auto space-y-4 "
        >
          <div>
            <TextField
              type="text"
              label="Name"
              className="w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          {/* Add other form fields similarly */}
          <div className="relative">
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
              className="w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase and one special character.
              </p>
            )}
            <p
              onClick={handleShowPassword}
              className="absolute top-[18px] right-2 cursor-pointer"
            >
              {showPassword ? (
                <FaEye className="text-blue-500" size={20} />
              ) : (
                <FaEyeSlash size={20} />
              )}
            </p>
          </div>
          <div>
            <TextField
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              className="w-full"
              {...register("confirm", { required: true })}
            />
            {errors.confirm && (
              <span className="text-red-600">Confirm password is required</span>
            )}
            {errorMessage && (
              <span className="text-red-600">{errorMessage}</span>
            )}
          </div>
          <div>
            <TextField
              type="url"
              label="Photo URL"
              className="w-full"
              {...register("photo", { required: true })}
            />
            {errors.photoURL && (
              <span className="text-red-600">PhotoURL is required</span>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            />
          </div>
        </form>
        <div className="text-center mt-4 max-w-sm mx-auto ">
          <div className="my-2 divider">OR</div>
          <SocialLogin />
          <p className="mt-3">
            Already have an account? Go{" "}
            <NavLink to="/login" className="text-blue-500 font-semibold">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/*
 <div>
                <TextField
                  type="url"
                  label="Photo URL"
                  className="w-full"
                  {...register("photo", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
*/
