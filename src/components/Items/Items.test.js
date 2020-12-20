import { shallow } from "enzyme";
import Items from "./Items.jsx";

describe("Testing Items length", () => {
  test("populated items list", () => {
    const listOfNumbers = [1, 2, 3];
    const wrapper = shallow(<Items items={listOfNumbers} />);
    expect(wrapper.find("ul").children()).toHaveLength(listOfNumbers.length);
  });

  test("populated items list", () => {
    const emptyList = [];
    const wrapper = shallow(<Items items={emptyList} />);
    expect(wrapper.find("ul").children()).toHaveLength(0);
  });
});
