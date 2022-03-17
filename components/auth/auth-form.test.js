import { render, screen } from "@testing-library/react";
import Auth from "../auth/auth-form";
import "@testing-library/jest-dom/extend-expect";

describe("Test auth form component.", () => {
  it("renders a heading", () => {
    render(<Auth />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Login");
    const inputPassword = screen.getByPlaceholderText("Password");
    expect(inputPassword).toBeTruthy();
    const button = screen.getByTestId("login");
    expect(button).toHaveTextContent("Login");
  });
});
