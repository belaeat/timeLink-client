import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-[#D4F9CF]">
      <div className="flex items-center gap-2 p-3">
        <img className="max-w-7" src={logo} alt="TimeLink Logo" />
        <h1 className="text-5xl stroke-2 stroke-[#5c48bc]">TimeLink</h1>
      </div>
    </nav>
  );
};

export default NavBar;
