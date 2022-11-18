import { render, screen } from "@/test/test-utils";
import { SettingDrawer } from "../SettingDrawer";

import useDisclosure from "@/hooks/useDisclosure";

describe("SettingDrawer Component test suite", () => {
    test("render inital text", async () => {
        const { close, isOpen, open } = useDisclosure(false);
        // render
        render(<SettingDrawer isOpen={isOpen} open={open} close={close} />);

        // query
        const head = screen.getByRole("heading");

        // assertion
        expect(head).toHaveTextContent("SettingDrawer");
    });
});
