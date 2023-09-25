import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navData = [
  { link: "/", name: "Home" },
  { link: "/donation", name: "Donation" },
  { link: "/statistics", name: "Statistics" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`container mx-auto px-5 sm:px-10 py-3 sm:py-5 w-full left-0 right-0 top-0 ${
        pathname === "/" && "fixed"
      }`}>
      <div className="flex justify-between items-center">
        <div>
          <img
            src="https://i.ibb.co/DKLBbcd/Logo.png"
            alt="Logo"
            className="w-52 h-12 lg:w-60	lg:h-16 hidden sm:block"
          />
          <img
            src="https://i.ibb.co/HHQBmsM/Group.png"
            alt="Group"
            className="sm:hidden w-10 h-10"
          />
        </div>
        <div className="sm:hidden cursor-pointer" onClick={handleNavbar}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>

        {isOpen && (
          <ul
            className={`sm:hidden absolute right-0 top-16 flex flex-col gap-5 justify-center items-center py-6 w-full bg-white z-10`}>
            {navData.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                onClick={handleNavbar}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-b-red-500"
                      : "font-normal"
                  } text-lg `
                }>
                {item.name}
              </NavLink>
            ))}
          </ul>
        )}

        <ul className={`hidden sm:flex justify-start items-center gap-10 `}>
          {navData.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              onClick={handleNavbar}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-b-red-500"
                    : "font-normal"
                } text-lg `
              }>
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
