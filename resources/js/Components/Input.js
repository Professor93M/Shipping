import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    className,
    placeholder,
    id,
    max,
    color,
    min,
    required,
    isFocused,
    handleChange,
    disabled,
    value,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            disabled={disabled}
            id={id}
            max={max}
            min={min}
            name={name}
            value={value}
            className={color ? null : className}
            ref={input}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}
