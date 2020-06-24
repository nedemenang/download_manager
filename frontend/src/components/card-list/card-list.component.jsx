import React from "react";
import { Card } from "../card/card.component";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { getDownloads } from "../../actions/downloads";
import "./card-list.style.css";

class CardList extends React.Component {
  static propTypes = {
    downloads: PropTypes.array.isRequired,
    getDownloads: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getDownloads();

    this.socket = io("http://localhost:4000/");
    this.socket.on("connect", () => {});

    this.socket.on("downloads", () => {
      setTimeout(() => {
        this.props.getDownloads();
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <div className="card-list">
          {this.props.downloads.map((download, index) => (
            <Card key={index} download={download} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  downloads: state.downloads.downloads,
});

export default connect(mapStateToProps, { getDownloads })(CardList);
