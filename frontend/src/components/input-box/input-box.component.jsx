import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { postDownloads } from "../../actions/downloads";
import "./input-box.style.css";

class InputBox extends React.Component {
  static propTypes = {
    postDownloads: PropTypes.func.isRequired,
  };
  constructor() {
    super();

    this.state = {
      inputField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputField: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { inputField } = this.state;
    this.props.postDownloads(inputField);
  };

  render() {
    return (
      <div className="wrapper">
        <input
          id="input-download"
          type="search"
          className="input"
          placeholder="Enter download link"
          onChange={this.handleChange}
        />
        <div className="searchbtn">
          <Link
            id="download"
            onClick={this.handleClick}
            to="/"
            className=" fas fa-download"
          ></Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { postDownloads })(InputBox);
