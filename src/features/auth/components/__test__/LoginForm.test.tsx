import { render, screen, waitFor, userEvent } from "@/test/test-utils";

import LoginForm, { INVALIDE_MSG } from "../LoginForm";

const tryLogin = (email: string, password: string, onSuccess: () => void) => {
  const newUser = { email, password };

  render(<LoginForm onSuccess={onSuccess} />);

  userEvent.type(screen.getByLabelText("email"), newUser.email);
  userEvent.type(screen.getByLabelText("password"), newUser.password);

  userEvent.click(screen.getByRole("button", { name: /login/i }));
};

describe("LoginForm", () => {
  test("input an invalid password does not call onSuccess and, validate notice", async () => {
    const onSuccess = jest.fn();
    tryLogin("abc123", "pwd", onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(0));
    expect(await screen.findByRole("alert")).toHaveTextContent(
      INVALIDE_MSG.password
    );
  });

  test("input an invalid email does not call onSuccess and, validate notice", async () => {
    const onSuccess = jest.fn();
    tryLogin("abc123", "password", onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(0));
    expect(await screen.findByRole("alert")).toHaveTextContent(
      INVALIDE_MSG.email
    );
  });

  test("sould login new user and call onSuccess", async () => {
    const onSuccess = jest.fn();
    tryLogin("123@123", "password", onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
  });
});
