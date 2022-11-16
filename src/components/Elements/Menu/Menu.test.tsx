import { render, screen } from "@/test/test-utils";
import { Menu } from "./Menu";

describe("Menu Component test suite", () => {
    test("render inital text", async () => {
        // render
        render(<Menu />);

        // query
        const head = screen.getByRole("heading");

        // assertion
        expect(head).toHaveTextContent("Menu");
    });
});
