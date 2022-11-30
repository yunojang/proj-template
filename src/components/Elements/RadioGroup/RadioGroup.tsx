import React, { FC } from "react";
import {
    Box,
    HStack,
    useRadio,
    useRadioGroup,
    UseRadioProps,
} from "@chakra-ui/react";

interface RadioCardProps extends UseRadioProps {
    children: React.ReactNode;
}

function RadioCard(props: RadioCardProps) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="sm"
                boxShadow="md"
                _checked={{
                    bg: "green.500",
                    color: "white",
                    borderColor: "green.500",
                }}
                // _focus={{
                //     boxShadow: "outline",
                // }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
}

interface Option {
    id: string;
    text: string;
}

export interface RadioGroupProps {
    name: string;
    options: Option[];
    defaultValue?: string;
    onChange?(id: string): void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
    name,
    options,
    defaultValue,
    onChange = () => {},
}) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        defaultValue,
        onChange,
    });

    const group = getRootProps();

    return (
        <HStack {...group}>
            {options.map((option) => {
                const radio = getRadioProps({ value: option.id });
                return (
                    <RadioCard key={option.id} {...radio}>
                        {option.text}
                    </RadioCard>
                );
            })}
        </HStack>
    );
};
