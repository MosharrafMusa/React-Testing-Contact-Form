import React from "react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});
//test getByText
test("first name* is on form", async () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name*/i);
  expect(firstName).toBeInTheDocument();
});

test("last name is on the form", () => {
  const { getByText } = render(<App />);
  const lastName = getByText(/last name*/i);
  expect(lastName).toBeInTheDocument();
});

test("email is on the form", () => {
  const { getByText } = render(<App />);
  const email = getByText(/email*/i);
  expect(email).toBeInTheDocument();
});

test("form submit adds new info to the list", () => {});

//Testing input value change on contact form

test("Changing input values", () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name*/);

  fireEvent.change(firstNameInput, { target: { value: "Nel" } });

  expect(firstNameInput.value).toBe("Nel");

  fireEvent.click(getByTestId(/test/i));
});
