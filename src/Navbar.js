import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const dogs = this.props.dogs.map((d) => (
      <li className="nav-item" key={d.name}>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to={`/dog-app/dogs/${d.name}`}
        >
          {d.name}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/dog-app/dogs">
              Dog Shelter
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">{dogs}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
