import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "text-dark font-bold border-primary-dark px-1 py-2 border-b-2 inline-flex items-center leading-5 focus:outline-none  text-sm"
                    : "inline-flex items-center px-1 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-muted focus:border-secondary-dark transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
