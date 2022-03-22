import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import moment from "moment";

const Index = ({ auth, errors, agents, columns }) => {
    const cols = Object.keys(columns);
    const data = agents.map((agent) => {
        return {
            ...agent,
            created_at: moment(agent.created_at).format("YYYY-MM-DD"),
        };
    });

    console.log(data);
    return (
        <Layout auth={auth} errors={errors} heading="العملاء">
            <div className=" px-2">
                <Link
                    href="/register"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>إضافة عميل</span>
                </Link>
            </div>
            <div className=" mt-10">
                {data.length > 0 ? (
                    <Table
                        data={data}
                        cols={cols}
                        user
                        arabicCols={columns}
                        paginate
                    />
                ) : (
                    <h3 className="text-center"> ليس لديك عملاء بعد </h3>
                )}
            </div>
        </Layout>
    );
};

export default Index;
