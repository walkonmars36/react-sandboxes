import { shallow } from "enzyme";
import Flag from "./Flag";

describe("", () => {
  test("", () => {
    const wrapper = shallow(<Flag flagged={true} />);
    expect(wrapper.find(".flagged").exists()).toBe(true);
    expect(wrapper.find(".unflagged").exists()).toBe(false);
  });

  test("", () => {
    const wrapper = shallow(<Flag flagged={false} />);
    expect(wrapper.find(".unflagged").exists()).toBe(true);
    expect(wrapper.find(".flagged").exists()).toBe(false);
  });
});
