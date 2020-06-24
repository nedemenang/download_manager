import React from "react";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import CardList from "./card-list.component";
import configureStore from "redux-mock-store";
import Card from "../../components/card/card.component";

configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

const store = mockStore({
  downloads: [],
});

const props = {
  downloads: [
    {
      id: "5ed95b7db3e38300128cd81e",
      url: "http://www.example.com/free-movie.mp4",
      status: "done",
      updatedAt: "2020-06-05T02:02:39.971Z",
    },
    {
      id: "5ed96ebeab92250012d0a760",
      url: "http://www.example.com/free-movie.mp4",
      status: "done",
      updatedAt: "2020-06-04T21:59:26.171Z",
    },
  ],
};

let enzymeWrapper = shallow(
  <Provider store={store}>
    <CardList {...props} />
  </Provider>
);

describe("<CardList />", () => {
  beforeEach(() => {
    enzymeWrapper = shallow(
      <Provider store={store}>
        <CardList {...props} />
      </Provider>
    );
  });

  test("should matches the stored snapshot", () => {
    expect(enzymeWrapper.text()).toMatchSnapshot();
  });
});
