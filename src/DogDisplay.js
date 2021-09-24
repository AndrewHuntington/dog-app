import React, { Component } from "react";
import "./DogDisplay.css";

export default class DogDisplay extends Component {
  paramsName = this.props.match.params.name;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  findDog() {
    for (const dog of this.props.dogs) {
      if (dog.name === this.paramsName) {
        return dog;
      }
    }
  }

  handleClick() {
    this.props.history.push("/dogs");
  }

  render() {
    const dog = this.findDog();
    const dogFacts = dog.facts.map((fact) => (
      <li className="list-group-item">{fact}</li>
    ));

    return (
      <div className="DogDisplay-card card mx-auto my-4">
        <img src={dog.src} class="card-img-top" alt="dog pic" />
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{`${dog.age} years old`}</h6>
        </div>
        <ul className="list-group list-group-flush">
          {dogFacts}
          <li className="list-group-item">
            <btn className="btn btn-primary" onClick={this.handleClick}>
              Go back
            </btn>
          </li>
        </ul>
      </div>
    );
  }
}
