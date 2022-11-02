import { render, screen } from "@/test/test-utils";
import { Collapse } from "./Collapse";

describe("Collapse Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<Collapse />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("Collapse");
  });
});
