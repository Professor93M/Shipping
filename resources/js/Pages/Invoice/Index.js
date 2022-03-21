import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import moment from "moment";
import { FiSearch } from "react-icons/fi";

const Index = ({ auth, errors, invoice, columns }) => {
    const cols = Object.keys(columns);
    const data = invoice.map((item) => {
        return {
            ...item,
            created_at: moment(item.created_at).format("YYYY-MM-DD"),
            status: item.status === null ? "غير مدفوعة" : "مدفوعة",
        };
    });

    return (
        <Layout auth={auth} errors={errors} heading="الفواتير">
            <div className=" px-2">
                <Link
                    href="/invoice/create"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <span>إضافة فاتورة</span>
                    <AiOutlineUserAdd className="bg-inherit" />
                </Link>
            </div>
            <div className=" mt-10">
                <Table
                    data={data}
                    show={
                        <FiSearch className="bg-green-400  mx-auto hover:bg-green-500 text-slate-200 w-8 h-8 p-1 rounded-md cursor-pointer " />
                    }
                    cols={cols}
                    arabicCols={columns}
                    paginate
                />
            </div>
        </Layout>
    );
};

export default Index;
