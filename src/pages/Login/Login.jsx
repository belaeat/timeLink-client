import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const auth = getAuth(app);

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(userName, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Login Successful!");
        setError("");
      })
      .catch((error) => {
        setError("Email or Password is invalid!");
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero h-screen bg-[#d4f9cf]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[350px] h-[604px] shrink-0 shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body bg-[#BBBBFF] border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]"
          >
            <h1 className="font-bold text-3xl self-center mb-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#5C48BC]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border-2 border-[#8168fe] rounded-md shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-[#5C48BC]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-2 border-[#8168fe] rounded-md  shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-[#5C48BC] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 flex  items-center">
              <button className="w-48">Login</button>
              <button className="w-48" onClick={handleGoogleLogin}>Sign in with Google</button>
              <Link to="/gameplay">
                <button className="w-48">Play as Guest</button>
              </Link>
              <p className="text-red-700">{error}</p>
              <p className="text-[#5C48BC]">{success}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
