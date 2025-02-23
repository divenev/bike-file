import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

describe("Test suite", () => {
  test("zero test", () => {
    expect(true).toBe.true;
  });

  test("login felds", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <Login></Login>
        </UserProvider>
      </BrowserRouter>
    );

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const login = screen.getAllByDisplayValue("Login");

    expect(email).toByInTheDocument;
    expect(password).toByInTheDocument;
    expect(login).toByInTheDocument;
  });

  test("login felds", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <Login></Login>
        </UserProvider>
      </BrowserRouter>
    );

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const login = screen.getAllByDisplayValue("Login");

    expect(email).toByInTheDocument;
    expect(password).toByInTheDocument;
    expect(login).toByInTheDocument;
  });

  test("login value", async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <Login></Login>
        </UserProvider>
      </BrowserRouter>
    );

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const login = screen.getByRole("button");

    userEvent.type(email, "peter@abv.bg");
    userEvent.type(password, "123456");

    expect(email.value).toContain("peter@abv.bg");
    expect(password.value).toContain("123456");
  });

  test("Login link Register", () => {
    global.window = { location: { pathname: null } };
    render(
      <BrowserRouter>
        <UserProvider>
          <Login></Login>
        </UserProvider>
      </BrowserRouter>
    );
    userEvent.click(screen.queryByText("here"));
    expect(global.window.location.pathname).toContain("/users/register");
  });

  test("Register link Login", () => {
    global.window = { location: { pathname: null } };
    render(
      <BrowserRouter>
        <UserProvider>
          <Register></Register>
        </UserProvider>
      </BrowserRouter>
    );
    userEvent.click(screen.queryByText("here"));
    expect(global.window.location.pathname).toContain("/users/login");
  });
});
