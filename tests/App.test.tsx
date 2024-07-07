import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../src/App";
import React from "react";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const element = screen.getByTestId("app");
    expect(element).toBeInTheDocument();
  });

  it("should be game over", () => {});

  it("should draw finishing animation", () => {});
});
