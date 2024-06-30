import { NavLink } from "react-router-dom";
import reactImg from "../assets/react.svg";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black bg-gray-100 hover:text-black rounded-3xl px-3 py-2"
      : "text-black hover:bg-gray-100 hover:text-black rounded-3xl px-3 py-2";

  return (
    <>
      <nav className="bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-white fixed top-0 w-full z-50 ">
        <div className="max-w-7xl mx-auto pr-6 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
              <NavLink
                className="flex items-center flex-shrink-0 gap-2 mr-4"
                to="/"
              >
                <img
                  className="sm:h-[40px] h-10 w-auto "
                  src={reactImg}
                  alt="React Jobs"
                />
                <span className="hidden md:block font-mono text-black text-4xl font-bold"></span>
              </NavLink>
            </div>

            <div className="md:ml-5">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/projects" className={linkClass}>
                  Projects
                </NavLink>
                <NavLink
                  to="/add-project"
                  className="text-white bg-gray-950 hover:bg-black hover:text-white rounded-3xl px-4 py-2 flex gap-1 animate-none"
                >
                  Proposal +
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
