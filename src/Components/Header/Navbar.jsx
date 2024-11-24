import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { sixJsonData } from '../Context/Context';
import { toast } from 'react-toastify';
import Logo from '../../assets/web Image/logo.png';

const Navbar = () => {
  const { User, setUser, UserEnroll, LogOutAccount } = useContext(sixJsonData);

  // console.log(User);
  const Links = (
    <div className="flex gap-4 md:gap-7">
      <NavLink to="/">Home</NavLink>

      {User && <NavLink to="/Services">Services</NavLink>}
      {User && UserEnroll && <NavLink to="/MyClasses">My Classes</NavLink>}
      {User && <NavLink to="/FindJobs">Find Jobs</NavLink>}

      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/About">About Us</NavLink>
    </div>
  );

  // console.log(User?.email);

  const LogOutButton = () => {
    setUser(null);
    LogOutAccount()
      .then(result => {
        toast.warn('Your account Log Out');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="navbar  w-11/12 mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 px-4 py-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <div className="w-10 h-10 ">
          <img className="h-full w-full" src={Logo} alt="" />
        </div>
        <a className="btn btn-ghost text-xl font-bold">Success Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      <div className="navbar-end ">
        {User ? (
          <div className="flex gap-2 items-center">
            <div className="relative group h-11 w-11">
              <img
                className="h-full w-full rounded-full border"
                src={User?.photoURL}
                alt=""
              />

              <div className="absolute left-full -translate-x-full  bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {User?.displayName || 'User'}
              </div>
            </div>

            <Link to="/Login">
              <button onClick={LogOutButton} className="btn btn-outline ">
                Log out
              </button>
            </Link>
          </div>
        ) : (
          <div className="">
            <Link to="/Login" className="btn btn-outline ">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
