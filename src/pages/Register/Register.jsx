import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const userName = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    console.log(userName, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero h-screen bg-[#d4f9cf]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="card-body bg-[#BBBBFF] border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]"
          >
            <h1 className="font-bold text-3xl self-center mb-4">Register</h1>
            {/* Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#5C48BC]">Username</span>
              </label>
              <input
                type="username"
                name="username"
                placeholder="username"
                className="input border-2 border-[#8168fe] rounded-md shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#5C48BC]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border-2 border-[#8168fe] rounded-md shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#5C48BC]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-2 border-[#8168fe] rounded-md shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
              />
            </div>
            <div className="form-control mt-4 flex items-center">
              <button className="w-48">Register</button>
              <Link to="/gameplay">
              <button className="w-48">Play as Guest</button>
              </Link>
              <p className="mt-4 mb-4">
                Already have an account?{" "}
                <Link className="font-bold link-hover" to="/login">
                  Login here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
