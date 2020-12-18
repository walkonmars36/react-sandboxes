import React from "react";
import { render } from "@testing-library/react";
import ChildComponent from "./ChildComponent";

describe("ChildComponent tests", () => {
  it("should render", () => {
    expect(render(<ChildComponent />)).toBeTruthy();
  });
});
