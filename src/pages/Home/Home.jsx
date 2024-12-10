import { Link } from "react-router-dom";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";

const Home = () => {
  return (
    <div className="h-screen">
      <WelcomeBanner/>
      <div className="flex w-full h-full justify-center">
        {/* Login */}
        <div className="absolute top-[83%] left-[10.5%] z-30">
          <Link to="/login">
            <button className="h-14 w-56 p-1.5 text-[26px]">Login</button>
          </Link>
        </div>

        {/* Register */}
        <div className="absolute top-[83%] left-[29.25%] z-30">
          <Link to="/register">
            <button className="h-14 w-56 p-1.5 text-[26px]">Register</button>
          </Link>
        </div>

        {/* Guest */}
        <div className="absolute top-[83%] left-[48%] z-30">
          <Link to="/gameplay">
            <button className="h-14 w-56 p-1.5 text-[26px]">Play as Guest</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
