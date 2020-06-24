import DownloadReducer from "./downloads";

const defaultState = {
  downloads: [],
};

describe("Reducer", () => {
  test("should return default state when state is not undefined", () => {
    expect(DownloadReducer(undefined, { type: "DUMMY_ACTION" })).toEqual(
      defaultState
    );
  });

  test("should return default state for DUMMY_ACTION action type", () => {
    expect(DownloadReducer(undefined, { type: "DUMMY_ACTION" })).toEqual(
      defaultState
    );
  });

  test("should return expected state for GET_DOWNLOADS action type and specific state", () => {
    const previousState = {
      downloads: [],
    };
    const action = {
      type: "GET_DOWNLOADS",
      payload: {
        items: [
          {
            id: "5ed95b7db3e38300128cd81e",
            url: "http://www.example.com/free-movie.mp4",
            status: "done",
            updatedAt: "2020-06-05T02:02:39.971Z",
          },
        ],
      },
    };
    const expectedState = {
      downloads: {
        items: [
          {
            id: "5ed95b7db3e38300128cd81e",
            url: "http://www.example.com/free-movie.mp4",
            status: "done",
            updatedAt: "2020-06-05T02:02:39.971Z",
          },
        ],
      },
    };
    expect(DownloadReducer(previousState, action)).toEqual(expectedState);
  });

  test("should return expected state for POST_DOWNLOADS action type and specific state", () => {
    const previousState = {
      downloads: [],
    };
    const action = {
      type: "POST_DOWNLOADS",
      payload: [
        {
          id: "5ed95b7db3e38300128cd81e",
          url: "http://www.example.com/free-movie.mp4",
          status: "done",
          updatedAt: "2020-06-05T02:02:39.971Z",
        },
      ],
    };

    const expectedState = {
      downloads: [
        [
          {
            id: "5ed95b7db3e38300128cd81e",
            url: "http://www.example.com/free-movie.mp4",
            status: "done",
            updatedAt: "2020-06-05T02:02:39.971Z",
          },
        ],
      ],
    };
    expect(DownloadReducer(previousState, action)).toEqual(expectedState);
  });
});
