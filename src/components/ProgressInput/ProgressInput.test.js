import React from "react";
import { render } from "@testing-library/react";
import ProgressInput from "./ProgressInput";

describe("ProgressInput tests", () => {
  it("should render", () => {
    expect(render(<ProgressInput />)).toBeTruthy();
  });
});
