import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

const Index = ({ auth, errors, statuses, columns }) => {
    const cols = Object.keys(columns);
    const data = statuses.map((item) => {
        return {
            ...item,
            // color: <p className={`bg-[${item.color}] w-4 h-4`}></p>,
            color: (
                <input
                    type="color"
                    value={item.color}
                    disabled
                    // className={`bg-[${item.color}] w-4 h-4`}
                />
            ),
            created_at: moment(item.created_at).format("YYYY-MM-DD"),
        };
    });

    console.log(data);
    return (
        <Layout auth={auth} errors={errors} heading="الحالات">
            <div className=" px-2">
                <Link
                    href="/status/create"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>إضافة حالة جديدة</span>
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
