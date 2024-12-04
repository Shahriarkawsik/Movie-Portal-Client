import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Alert } from "./../../Alert/Alert";
import { useContext } from "react";

const NavBar = () => {
  const { user, SignOutUser } = useContext(AuthContext);

  const navItems = (
    <>
      <NavLink
        className={
          "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={
          "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
        }
        to={"/allMovies"}
      >
        All Movies
      </NavLink>

      {user ? (
        <>
          <NavLink
            className={
              "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
            }
            to={"/addMovie"}
          >
            Add Movie
          </NavLink>
          <NavLink
            className={
              "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
            }
            to={"/myFavorites"}
          >
            My Favorites
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={
              "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={
              "hover:bg-teal-600 hover:rounded-md hover:px-2 hover:py-1 hover:text-white "
            }
            to={"/register"}
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );
  // handleSignOut
  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        Alert(true, "Log out successful");
      })
      .catch((error) => {
        Alert(false, "Log out unsuccessful");
      });
  };
  return (
    <section className="w-11/12 lg:w-11/12 mx-auto Rubik my-4">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown max-sm:space-x-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-color1"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn hover:bg-teal-600 hover:text-white btn-ghost Nothing sm:text-2xl lg:text-2xl"
          >
            Movie Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1 gap-7 text-xl text-color1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="space-x-2 flex">
              <img
                title={user?.displayName}
                className="w-12 rounded-full "
                src={user?.photoURL}
                alt=""
              />
              <Link className="btn" to={"/login"} onClick={handleSignOut}>
                Log Out
              </Link>
              <button></button>
            </div>
          ) : (
            <Link className="btn" to={"/login"}>
              Log in
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
