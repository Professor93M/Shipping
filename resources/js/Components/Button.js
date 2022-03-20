import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    primary,
    handleClick,
}) {
    return (
        <button
            onClick={handleClick}
            type={type}
            className={`${
                primary
                    ? "bg-primary-default text-dark hover:bg-primary-dark"
                    : "bg-secondary-default  hover:bg-secondary-dark"
            } ${
                processing && "opacity-25"
            } inline-block px-4 py-2 rounded-md outline-none focus:outline-none`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
