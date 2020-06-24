import ErrorReducer from "./errors";

const defaultState = {
  message: {},
  status: null,
};

describe("Reducer", () => {
  test("should return default state when state is not undefined", () => {
    expect(ErrorReducer(undefined, { type: "DUMMY_ACTION" })).toEqual(
      defaultState
    );
  });

  test("should return default state for DUMMY_ACTION action type", () => {
    expect(ErrorReducer(undefined, { type: "DUMMY_ACTION" })).toEqual({
      message: {},
      status: null,
    });
  });

  test("should return expected state for GET_ERRORS action type and specific state", () => {
    const previousState = {
      message: {},
      status: null,
    };
    const action = {
      type: "GET_ERRORS",
      payload: {
        message: { msg: "Error Occured" },
        status: 404,
      },
    };
    const expectedState = {
      message: { msg: "Error Occured" },
      status: 404,
    };
    expect(ErrorReducer(previousState, action)).toEqual(expectedState);
  });
});
