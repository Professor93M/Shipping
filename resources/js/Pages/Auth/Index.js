import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import moment from "moment";
import { FiSearch } from "react-icons/fi";

const Index = ({ auth, errors, users, columns }) => {
    const cols = Object.keys(columns);
    const data = users.map((user) => {
        return {
            ...user,
            created_at: moment(user.created_at).format("YYYY-MM-DD"),
            status: user.status === null ? "غير مدفوعة" : "مدفوعة",
        };
    });

    return (
        <Layout auth={auth} errors={errors} heading="الموظفين">
            <div className=" px-2">
                <Link
                    href="/users/create"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <span>إضافة موظف</span>
                    <AiOutlineUserAdd className="bg-inherit" />
                </Link>
            </div>
            <div className=" mt-10">
                <Table
                    data={data}
                    user
                    cols={cols}
                    arabicCols={columns}
                    paginate
                />
            </div>
        </Layout>
    );
};

export default Index;
