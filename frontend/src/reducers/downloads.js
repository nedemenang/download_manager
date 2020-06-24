import { GET_DOWNLOADS, POST_DOWNLOADS } from "../actions/types";

const initialState = {
  downloads: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOWNLOADS:
      return {
        ...state,
        downloads: action.payload,
      };
    case POST_DOWNLOADS:
      return {
        ...state,
        downloads: [...state.downloads, action.payload],
      };
    default:
      return state;
  }
}
