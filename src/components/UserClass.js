import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component did mount");
    //api call

    const data = await fetch("https://api.github.com/users/juturuajay");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="github-pic" src={avatar_url} />
        <h3>Name: {name}</h3>

        <h4>Location: {location}</h4>
        <h4>Contact: @ajay007</h4>
      </div>
    );
  }
}

export default UserClass;
