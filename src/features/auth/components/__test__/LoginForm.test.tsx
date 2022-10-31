import { test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "../LoginForm";

test("LoginForm", async () => {
  const newUser = { email: "123@123", password: "123123" };
  const onSucess = jest.fn();

  await render(<LoginForm onSuccess={onSucess} />);

  // userEvent.type(screen.getByRole("bu"));
});
