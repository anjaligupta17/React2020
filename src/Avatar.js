import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to avatar world",
    };
  }
  namechange() {
    this.setState({
      name: "Subscribe to anjali channel",
    });
  }

  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "Anjali",
        work: "Web development",
      },
      {
        id: 2,
        name: "Sejal",
        work: "Chartered Accounted",
      },
      {
        id: 3,
        name: "Antara",
        work: "Insurance manager",
      },
      {
        id: 4,
        name: "AnjaliS",
        work: "Defence",
      },
    ];
    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
      return (
        <Avatarlist
          key={i}
          id={avatarlistarray[i].name}
          name={avatarlistarray[i].name}
          work={avatarlistarray[i].work}
        />
      );
    });
    return (
      <div className="mainpage">
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
        <button onClick={() => this.namechange()}>Subscribe</button>
      </div>
    );
  }
}
export default Avatar;
