import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { FaRegFlag } from "react-icons/fa";
import moment from "moment";

const Status = ({ auth, errors, shippings, columns }) => {
    return (
        <Layout auth={auth} errors={errors} heading="إعدادات اوامر الشحن">
            <Link
                href="/status/settings"
                className="flex flex-col   items-center justify-center bg-white rounded-lg border shadow-md  w-1/3 h-64 hover:bg-default dark:border-dark dark:bg-muted dark:hover:bg-dark"
            >
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    <FaRegFlag className="w-32 h-44" />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-600 dark:text-default">
                    الحالات
                </h5>
            </Link>
        </Layout>
    );
};

export default Status;
