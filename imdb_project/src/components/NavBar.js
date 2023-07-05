import React from "react";

import Logo from "../MovieLogo.png";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} className="w-[50px]" />

      <Link to="/" className="text-blue-400">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400">
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;
