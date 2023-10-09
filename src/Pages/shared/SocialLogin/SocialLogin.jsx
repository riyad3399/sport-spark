import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
          role: "user"
        };
        fetch("https://sport-spark-server-riyad3399.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-4">
        <Button
          type="button"
          variant="outlined"
          onClick={handleGoogleLogin}
          size="large"
          startIcon={<FaGoogle size={22} />}
        >
          Login with Google
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="large"
          startIcon={<FaGithub size={22} />}
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
