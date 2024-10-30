import { Link, NavLink } from "react-router-dom";
import menuLinks from "../../utils/menuLinks";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useSelector } from "react-redux";
import { BsCart3, BsSearch } from "react-icons/bs";
import UserProfileDropdown from "./UserDropDown";
import CartDropdown from "./CartDropDown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const cart = useSelector((state) => state.cart);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = menuLinks.map(({ label, path }) => (
    <li key={path} className="hover:text-pink-500 transition-colors">
      <NavLink to={path} activeClassName="text-pink-600">
        {label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-24">
        {/* Logo and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiOutlineX size={24} /> : <FaBars size={20} />}
          </button>
          <Link to="/" className="text-xl font-bold font-kiddosy">
            Pixie<span className="text-pink-600">pia</span>
          </Link>
        </div>

        {/* Main menu (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-4 lg:space-x-6 text-gray-700 font-semibold">
            {navLinks}
            {user && (
              <>
                <li>
                  <NavLink to="/addtoy" activeClassName="text-pink-600">
                    Add Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mytoys" activeClassName="text-pink-600">
                    My Toys
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          {/* Search icon */}
          <button className="text-gray-700">
            <BsSearch className="h-6 w-6" />
          </button>

          {/* Cart icon */}

          <CartDropdown cart={cart} />
          {/* User profile and auth buttons */}
          {user ? (
            <UserProfileDropdown logOut={logOut} user={user} />
          ) : (
            <Link to="/login">
              <button className="bg-pink-500 text-white px-4 py-1 rounded-md font-medium hover:bg-pink-600 transition">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            {navLinks}
            {user && (
              <>
                <li>
                  <NavLink to="/addtoy" activeClassName="text-pink-600">
                    Add Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mytoys" activeClassName="text-pink-600">
                    My Toys
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
