import { render, screen } from "@/test/test-utils";
import { RegisterForm } from "../RegisterForm";

describe("RegisterForm Component test suite", () => {
  test("render inital text", async () => {
    const onSucess = jest.fn();
    // render
    render(<RegisterForm onSuccess={onSucess} />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("RegisterForm");
  });
});
