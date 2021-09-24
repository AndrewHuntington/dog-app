import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./DogDisplay.css";

export default class DogDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  findDog(dogName) {
    for (const dog of this.props.dogs) {
      if (dog.name === dogName) {
        return dog;
      }
    }
    return null;
  }

  handleClick() {
    this.props.history.push("/dogs");
  }

  render() {
    const paramsName = this.props.match.params.name;
    const dog = this.findDog(paramsName);

    if (!dog) {
      return <Redirect to="/dogs" />;
    }

    const dogFacts = dog.facts.map((fact) => (
      <li className="list-group-item" key={Date.now() + Math.random()}>
        {fact}
      </li>
    ));

    return (
      <div className="DogDisplay-card card mx-auto my-4">
        <img src={dog.src} className="card-img-top" alt="dog pic" />
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{`${dog.age} years old`}</h6>
        </div>
        <ul className="list-group list-group-flush">
          {dogFacts}
          <li className="list-group-item">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Go back
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
