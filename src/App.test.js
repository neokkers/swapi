import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { TestingWrapper } from "./features/_reusable/TestingWrapper/TestingWrapper";

describe("App", () => {
  test("render", () => {
    render(
      <TestingWrapper>
        <App />
      </TestingWrapper>
    );
  });
  screen.debug();
});
