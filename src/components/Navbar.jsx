import { Link, NavLink } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const nav = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about us"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/payout"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          Payouts
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/affiliate"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          Affiliate
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Help center"}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
              : "transition-all duration-300"
          }
        >
          Help Center
        </NavLink>
      </li>
    </>
  );
  return (
    <section>
      <div className="navbar font-inter pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="space-y-4 py-4 menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow text-white"
            >
              {nav}
            </ul>
          </div>
          <Link
            to={"/"}
            className="cursor-pointer text-2xl font-pt bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold "
          >
            FundingTrail
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="lg:space-x-8  md:space-x-4 menu-horizontal px-1 text-[#fff]">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#050907] rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.email}</a>
                </li>

                <li>
                  <button onClick={() => logOut()}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/signIn"}
              className="flex  space-x-2 border-2 border-[#78ffd6] px-5 py-2 rounded-full bg-[#3f4b4558]"
            >
              <AiOutlineAppstoreAdd size={26} className="text-white" />
              <span className="font-medium text-white font-vietnam">
                Client Area
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
