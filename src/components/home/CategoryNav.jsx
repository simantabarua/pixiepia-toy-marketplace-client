import { options } from "../../utils/categoryOptions";

const CategoryNav = ({ handleCategorySelect }) => {
  return (
    <div
      className="navbar bg-pink-100 z-10"
     
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options?.map((option, index) => (
              <li key={index}>
                <a>
                  {option.category}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="z-0 menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52">
                  {option.subcategories?.map((subcategory, index) => (
                    <li key={index}>
                      <a
                        onClick={() => {
                          handleCategorySelect(subcategory);
                        }}
                      >
                        {subcategory}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          {options?.map((option, index) => (
            <li key={index}>
              <a>
                {option.category}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52">
                {option.subcategories?.map((subcategory, index) => (
                  <li key={index}>
                    <a
                      onClick={() => {
                        handleCategorySelect(subcategory);
                      }}
                    >
                      {subcategory}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default CategoryNav;
