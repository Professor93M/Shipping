import React from "react";

import Label from "./Label";

export default function Button({
    name,
    options,
    handleChange,
    className,
    value,
    disabled,
    placeholder,
    required,
    add,
    edit,
}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <select
                disabled={disabled}
                className={className}
                name={name}
                required={required}
                onChange={handleChange}
                defaultValue={placeholder ? placeholder : value}
            >
                {add && (
                    <option
                        disabled
                        value={placeholder}
                        className="disabled:bg-transparent"
                    >
                        {placeholder}
                    </option>
                )}

                {options.map((option, index) => (
                    <option
                        key={index}
                        className="w-full text-base bg-transparent"
                        value={edit ? option.id : option.name}
                        label={option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
