import React from "react";
import Input from "./Input";
import Label from "./Label";
const formItem = ({
    name,
    type,
    placeholder,
    forInput,
    label,
    required,
    handleChange,
    children,
}) => {
    return (
        <div className="relative z-0 mb-6 w-full group">
            {children ? (
                children
            ) : (
                <>
                    {" "}
                    <Input
                        type={type}
                        name={name}
                        id={name}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 focus:border-dark peer"
                        required={required}
                        placeholder={placeholder}
                        handleChange={handleChange}
                    />
                    {/* [k] */}
                    <Label
                        forHtml={forInput}
                        value={label}
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-right peer-focus:right-0 peer-focus:text-primary-dark peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 opacity-50 peer-focus:scale-75 peer-focus:-translate-y-6"
                    />
                </>
            )}
        </div>
    );
};

export default formItem;
