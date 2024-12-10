import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar flex bg-[#fefffa]">
      <div className="navbar-start">
        <Link to="/">
          <nav>
            <div className="flex-1 flex items-center gap-8">
              <img className="max-h-20" src={logo} alt="TimeLink Logo" />
              <h1 className="text-[70px] custom-h1 text-[#f7ff66]">TimeLink</h1>
            </div>
          </nav>
        </Link>
      </div>
      <div className="navbar-end flex-1 flex items-start gap-6">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
