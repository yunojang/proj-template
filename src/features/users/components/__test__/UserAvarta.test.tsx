import { render, screen } from "@/test/test-utils";
import { UserPopover } from "../UserPopover";

describe("UserAvarta Component test suite", () => {
    test("render inital text", async () => {
        const onSetting = jest.fn();
        // render
        render(<UserPopover onSetting={onSetting} />);

        // query
        const head = screen.getByRole("heading");

        // assertion
        expect(head).toHaveTextContent("UserAvarta");
    });
});
