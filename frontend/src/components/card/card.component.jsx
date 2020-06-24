import React from "react";
import moment from "moment";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <table>
      <tbody>
        <tr>
          <td>
            <h4>Url:</h4>
          </td>
          <td>
            <p>{props.download.url}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Timestamp:</h4>
          </td>
          <td>
            {moment(props.download.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
          </td>
        </tr>
        <tr>
          <td>
            <h4>Status:</h4>
          </td>
          <td>{props.download.status}...</td>
        </tr>
      </tbody>
    </table>
  </div>
);
