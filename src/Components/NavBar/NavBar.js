import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://png.pngtree.com/element_our/20190522/ourmid/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;