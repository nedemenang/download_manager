import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./homepage.component";
import CardList from "../../components/card-list/card-list.component";
import InputBox from "../../components/input-box/input-box.component";

configure({ adapter: new Adapter() });
const enzymeWrapper = shallow(<HomePage />);
describe("<HomePage />", () => {
  test("should matches the stored snapshot", () => {
    expect(enzymeWrapper.text()).toMatchSnapshot();
  });

  test("should render Homepage", () => {
    expect(enzymeWrapper).toBeDefined();
  });

  test("should render cardlist", () => {
    expect(enzymeWrapper.find(CardList)).toBeDefined();
  });

  test("should render inputbox", () => {
    expect(enzymeWrapper.find(InputBox)).toBeDefined();
  });
});
