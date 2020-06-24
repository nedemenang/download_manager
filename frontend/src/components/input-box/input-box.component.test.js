import React from "react";
import { Provider } from "react-redux";
import InputBox from "./input-box.component";
import { shallow, configure, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

configure({ adapter: new Adapter() });

const store = mockStore({
  downloads: [],
});

let enzymeWrapper = shallow(
  <Provider store={store}>
    <InputBox />
  </Provider>
);

describe("<InputBox />", () => {
  beforeEach(() => {
    enzymeWrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <InputBox />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should mount", () => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <InputBox />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should matches the stored snapshot", () => {
    expect(enzymeWrapper.text()).toMatchSnapshot();
  });

  test("should render 1 input tags", () => {
    expect(enzymeWrapper.find("input")).toHaveLength(1);
  });

  test("should render 1 link with class name fas", () => {
    expect(enzymeWrapper.find(".searchbtn")).toHaveLength(1);
  });
});
