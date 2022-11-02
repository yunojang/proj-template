import { render, screen } from "@/test/test-utils";
import { RegisterForm } from "../RegisterForm";

describe("RegisterForm Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<RegisterForm />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("RegisterForm");
  });
});
