import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import DogDisplay from "./DogDisplay";
import Menu from "./Menu";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import whiskey from "./images/whiskey.jpg";
import "./App.css";

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ],
};

function App(props) {
  const menuComponent = (routeProps) => (
    <Menu {...routeProps} dogs={props.dogs} />
  );
  const dogDisplayComponent = (routeProps) => (
    <DogDisplay {...routeProps} dogs={props.dogs} />
  );
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/dogs/:name" render={dogDisplayComponent} />
        <Route exact path="/dogs" render={menuComponent} />
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

export default App;
