import { useCallback, useState } from "react";

const useDisclosure = (initial: boolean) => {
    const [isOpen, setOpen] = useState<boolean>(initial);
    const open = useCallback(() => setOpen(true), []);
    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen((open) => !open), []);

    return {
        open,
        close,
        toggle,
        isOpen,
    };
};

export default useDisclosure;
