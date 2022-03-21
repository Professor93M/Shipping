import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";

const Index = ({ auth, errors, agents, columns }) => {
    const cols = Object.keys(columns);

    return (
        <Layout auth={auth} errors={errors} heading="العملاء">
            <div className=" px-2">
                <Link
                    href="/agents/create"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <span>إضافة عميل</span>
                    <AiOutlineUserAdd className="bg-inherit" />
                </Link>
            </div>
            <div className=" mt-10">
                <Table
                    data={agents}
                    cols={cols}
                    arabicCols={columns}
                    paginate
                />
            </div>
        </Layout>
    );
};

export default Index;
