import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('first name* is on form', async () => {
  const {getByText} = render(<App />);
  const firstName = getByText(/first name*/i);
  expect(firstName).toBeInTheDocument();
});