import { render, screen } from "@/test/test-utils";
import { UserAvarta } from "../UserAvarta";

describe("UserAvarta Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<UserAvarta />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("UserAvarta");
  });
});
