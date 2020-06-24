import axios from "axios";

import { GET_DOWNLOADS, POST_DOWNLOADS, GET_ERRORS } from "./types";

// GET DOWNLOADS
export const getDownloads = () => (dispatch) => {
  axios
    .get(`http://localhost:4000/downloads`)
    .then((res) => {
      dispatch({
        type: GET_DOWNLOADS,
        payload: res.data.items,
      });
    })
    .catch((err) => {
      const error = {
        message: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

// POST DOWNLOADS
export const postDownloads = (url) => (dispatch) => {
  axios
    .post(`http://localhost:4000/downloads`, { url })
    .then((res) => {
      dispatch({
        type: POST_DOWNLOADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        message: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
