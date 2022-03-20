import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    className,
    placeholder,
    id,
    required,
    isFocused,
    handleChange,
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
            id={id}
            name={name}
            value={value}
            className={className}
            ref={input}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}
