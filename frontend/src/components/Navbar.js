import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate(); //hook from react-router dom  redirect automatic logout button is their
  const LogOutFunction = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <img src="logo.png" alt="logo" className="logo" />
      {auth ? (
        <ul className="nav-ul  ">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add"> Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup" onClick={LogOutFunction}>
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
