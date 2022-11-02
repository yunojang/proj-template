import { render, screen } from "@/test/test-utils";
import { List } from "./List";

describe("List Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<List />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("List");
  });
});
