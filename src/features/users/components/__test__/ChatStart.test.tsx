import { render, screen } from "@/test/test-utils";
import { ChatStart } from "../ChatStart";

describe("ChatStart Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<ChatStart />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("ChatStart");
  });
});
