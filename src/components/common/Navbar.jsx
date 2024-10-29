import { Link, NavLink } from "react-router-dom";
import menuLinks from "../../utils/menuLinks";
import { FaBars, FaUser } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
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
    <nav className="bg-pink-50">
      <div className="navbar  text-pink-950 lg:px-24 container mx-auto uppercase ">
        <div className="navbar-start ">
          <div className="dropdown md:hidden">
            <button
              className="btn-circle btn-sm flex justify-center items-center mr-2"
              onClick={menuToggler}
            >
              {isMenuOpen ? <HiOutlineX size={24} /> : <FaBars size={20} />}
            </button>
            {isMenuOpen && (
              // for mobile
              <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase  ">
                {navLinks}
                {user && (
                  <>
                    <li>
                      <NavLink to="/addtoy">Add Toy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/mytoys">My Toy</NavLink>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
          <Link to="/">
            <h2 className=" text-sm sm:text-xl cursor-pointer font-kiddosy">
              Pixie<span className="text-pink-600 ">pia </span>
            </h2>
            <p className="text-[.60rem]">Find your dream toys</p>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="gap-4 lg:gap-5 menu-horizontal items-center text-md ">
            {/* For desktop  */}
            {navLinks}
            {user && (
              <>
                <NavLink to="/addtoy">Add Toy</NavLink>
                <NavLink to="/mytoys">My Toy</NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="mx-2 rounded-full border border-black w-8 h-8 md:w-12 md:h-12 cursor-pointer flex justify-center items-center overflow-hidden ">
                {user ? (
                  <img
                    className="rounded-full"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                ) : (
                  <FaUser className="w-6 h-6 md:w-8 md:h-8 " />
                )}
              </div>
              <Link onClick={handleLogout}>
                <button className="btn-custom">Logout</button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="btn-custom">Sign up</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
