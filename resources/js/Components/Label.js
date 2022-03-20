import React from "react";

export default function Label({ value, className, children, forHtml }) {
    return (
        <label htmlFor={forHtml} className={className}>
            {value ? value : children}
        </label>
    );
}
