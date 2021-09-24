import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    const dogs = this.props.dogs.map((d) => (
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="active"
          to={`/dogs/${d.name}`}
        >
          {d.name}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/dogs">
              Dog Shelter
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">{dogs}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
