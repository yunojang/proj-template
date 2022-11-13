import { render, screen } from "@/test/test-utils";
import { Profile } from "../Profile";

describe("Profile Component test suite", () => {
  test("render inital text", async () => {
    // render
    render(<Profile />);

    // query
    const head = screen.getByRole("heading");

    // assertion
    expect(head).toHaveTextContent("Profile");
  });
});
