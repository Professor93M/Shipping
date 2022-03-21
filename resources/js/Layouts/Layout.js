import React, { Children } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "@/Layouts/Sidebar";

export default function Dashboard({ auth, errors, children, heading }) {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="لوحة التحكم" />

            <div className="flex">
                <Sidebar auth={auth} />
                <div className="max-w-7xl mt-12 flex-1 mx-auto sm:px-6 lg:px-8">
                    <h2 className="font-semibold p-4 text-3xl bg-white text-center text-gray-800 leading-tight">
                        {heading}
                    </h2>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
