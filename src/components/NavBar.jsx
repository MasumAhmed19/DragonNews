import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const link = 
  <>
    <li className="text-base"><Link to='/'>Home</Link></li>
    <li className="text-base"><Link to='/about'>About</Link></li>
    <li className="text-base"><Link to='/career'>Career</Link></li>
  </>;

  const {user, logOut} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        {/* <img src={logo} className="w-[40px]" alt="" /> */}
        <p>{user && user.email}</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <img src={userIcon} className="w-[40px]" alt="" />
        {
          user && user?.email ? <div><button onClick={logOut}>Log Out</button></div>  : <div><Link to='/auth/login'>Login</Link></div>
        }
        
      </div>
    </div>
  );
};

export default NavBar;
