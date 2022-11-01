import { render, screen } from "@/test/test-utils";
import { Spinner } from "./Spinner";

describe("Spinner Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<Spinner />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("Spinner");
  });
});
