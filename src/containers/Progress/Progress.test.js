import React from "react";
import { render } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress tests", () => {
  it("should render", () => {
    expect(render(<Progress />)).toBeTruthy();
  });
});
