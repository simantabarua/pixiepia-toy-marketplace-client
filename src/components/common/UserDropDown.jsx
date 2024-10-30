import { useState } from "react";
import { AiOutlineUser, AiFillSetting, AiOutlineLogout } from "react-icons/ai";

const UserProfileDropdown = ({ logOut, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative  ${
        open ? " transform transition duration-300" : ""
      }`}
    >
      <div className="flex justify-center items-center space-x-3 cursor-pointer">
        <div className="w-8 h-8 rounded-full overflow-hidden border-pink-800 border">
          <img
            src={user?.photoURL}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {open && (
        <div className="absolute w-60 px-5 py-3 bg-white rounded-lg shadow border border-transparent mt-5">
          <p className="pb-2.5 capitalize text-base font-semibold">
            {user?.displayName}
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="font-medium">
              <a
                href="#"
                className="flex items-center transform transition-colors duration-200 "
              >
                <div className="mr-3 text-pink-600">
                  <AiOutlineUser className="w-6 h-6 " />
                </div>
                Account
              </a>
            </li>
            <li className="font-medium">
              <a
                href="#"
                className="flex items-center transform transition-colors duration-200 "
              >
                <div className="mr-3 text-pink-600">
                  <AiFillSetting className="w-6 h-6 " />
                </div>
                Setting
              </a>
            </li>
            <hr className="border-gray-700" />
            <li className="font-medium">
              <button
                onClick={logOut}
                href="#"
                className="flex items-center transform transition-colors duration-200 "
              >
                <div className="mr-3 text-pink-600">
                  <AiOutlineLogout className="w-6 h-6" />
                </div>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
