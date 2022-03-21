import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

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
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>إضافة فاتورة</span>
                </Link>
            </div>
            <div className=" mt-10">
                <Table
                    data={data}
                    show
                    cols={cols}
                    arabicCols={columns}
                    paginate
                />
            </div>
        </Layout>
    );
};

export default Index;
