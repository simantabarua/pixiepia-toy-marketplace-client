import { Link, NavLink } from "react-router-dom";
import menuLinks from "../../utils/menuLinks";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Search from "./Search";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const menuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = menuLinks?.map(({ label, path }) => (
    <li key={path}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  ));

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="navbar  bg-pink-100 lg:px-24 w-full">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <button
            className="btn-circle btn-sm flex justify-center items-center"
            onClick={menuToggler}
          >
            {isMenuOpen ? <HiOutlineX /> : <FaBars />}
          </button>
          {isMenuOpen && (
            // for mobile
            <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {navLinks}
            </ul>
          )}
        </div>
        <Link to="/">
          <h2 className="font-bold text-sm sm:text-2xl cursor-pointer ">
            Pixie<span className="text-pink-600 ">pia </span>
          </h2>
          <p className="text-xs">Find your dream toys</p>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="gap-2 lg:gap-5 menu-horizontal items-center font-semibold ">
          {/* For desktop  */}
          {navLinks}
          <Search />
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogout}>
            <button className="btn bg-pink-600 border-0">Logout</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn bg-pink-600 border-0">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
