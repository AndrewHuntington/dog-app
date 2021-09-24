import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    const dogs = this.props.dogs.map((d) => (
      <div className="Menu-item">
        <Link to={`/dogs/${d.name}`} dog={d} className="Menu-link">
          <img src={d.src} className="Menu-img img-fluid rounded-circle" />
          <p>{d.name}</p>
        </Link>
      </div>
    ));
    return (
      <div className="Menu d-flex justify-content-center flex-column mx-auto">
        <h1 className="Menu-title display-1 my-4">Click a Dog!</h1>
        <div className="Menu-dogs d-flex justify-content-sm-around flex-column flex-sm-row align-items-center">
          {dogs}
        </div>
      </div>
    );
  }
}
