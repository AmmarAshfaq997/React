import React from "react";
import { render, screen, act } from "@testing-library/react";
import mockFetch from "./_test_/functions/mockFetch";
import App from "./App";

// beforeEach(() => {
//   jest.spyOn(window, "fetch").mockImplementation(mockFetch);
// });

test("renders learn react link", async () => {
  render(<App />);

  await screen.findByText(/hello/i);
});

afterEach(() => {
  jest.restoreAllMocks();
});
