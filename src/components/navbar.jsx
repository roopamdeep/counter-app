import React, { Component } from "react";

const NavBar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">
          Total Counters {totalcounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
