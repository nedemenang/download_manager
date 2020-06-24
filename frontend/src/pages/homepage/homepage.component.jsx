import React, { Component } from "react";
import CardList from "../../components/card-list/card-list.component";
import InputBox from "../../components/input-box/input-box.component";
import "./homepage.style.css";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      downloads: [],
      inputField: "",
    };
  }

  render() {
    const { downloads } = this.state;
    return (
      <div className="homepage">
        <h1>Download Manager</h1>
        <InputBox />
        <CardList downloads={downloads} />
      </div>
    );
  }
}

export default HomePage;
