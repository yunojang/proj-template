import React, { FC, ReactElement } from "react";
import { css } from "@emotion/css";

export interface MenuObject {
    id: string;
    label: string;
    icon?: ReactElement;
    onSelect?(): void;
}

export interface MenuProps {
    menu?: MenuObject[];
    onSelect?(id: string): void;
}

export const Menu: FC<MenuProps> = ({ menu = [], onSelect = () => {} }) => {
    return (
        <div className="flex flex-col">
            {menu.map((m, idx) => (
                <div
                    key={idx}
                    className={`${hoverHighlight} p-3 flex items-center gap-2 cursor-pointer`}
                    onClick={() => {
                        if (m.onSelect) {
                            m.onSelect();
                        }
                        onSelect(m.id);
                    }}
                >
                    {m.icon}
                    {m.label}
                </div>
            ))}
        </div>
    );
};

const hoverHighlight = css`
    transition: 0.15s;

    &:hover {
        background-color: #eee;
    }
`;
