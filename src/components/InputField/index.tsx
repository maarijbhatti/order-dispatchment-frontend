import { Box, Flex } from "@chakra-ui/layout";
import {
    Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    PinInput,
    PinInputField,
    Select,
    Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    textarea?: boolean;
    name: string;
    label?: string;
    select?: boolean;
    listData?: Array<string>;
    checkBox?: boolean;
    pin?: boolean;
    codeLength?: number;
};

export const InputField: React.FC<InputFieldProps> = ({
    label,
    size,
    textarea,
    select,
    checkBox,
    codeLength,
    ...props
}) => {
    const [field, { error }] = useField(props);
    let InputTag = Input;
    let otherInput = null;

    if (textarea) InputTag = Textarea as any;
    else if (select)
        otherInput = (
            <Select {...field} placeholder={props.placeholder} id={field.name}>
                {props.listData?.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </Select>
        );
    else if (checkBox)
        otherInput = (
            <Checkbox {...field} id={field.name}>
                {props.children}
            </Checkbox>
        );

    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}

            {otherInput ? (
                otherInput
            ) : (
                <InputTag {...field} {...props} id={field.name} />
            )}
            {error ? <div style={{ color: 'red' }}>{error}</div> : null}
        </FormControl>
    );
};
