import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component Did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About us Page</h1>
        <h3>This is About us page</h3>
        <UserClass name={"first (cl) "} location={"banglr cl"} />
      </div>
    );
  }
}

export default About;
