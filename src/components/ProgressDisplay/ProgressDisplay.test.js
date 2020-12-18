import React from "react";
import { render } from "@testing-library/react";
import ProgressDisplay from "./ProgressDisplay";

describe("ProgressDisplay tests", () => {
  it("should render", () => {
    expect(render(<ProgressDisplay />)).toBeTruthy();
  });
});
