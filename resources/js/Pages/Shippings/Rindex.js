import React, { useEffect, useState } from "react";
import Table from "@/Components/Table";
import FormItem from "@/Components/FormItem";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Layout from "@/Layouts/Layout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useForm } from "@inertiajs/inertia-react";
import moment from "moment";
import { Inertia } from "@inertiajs/inertia";
import { GrRefresh } from "react-icons/gr";

const Rindex = ({ auth, errors, shippings, columns }) => {
    const [search, setSearch] = useState("");
    const drive = auth.user.pos === "سائق";
    const agent = auth.user.pos === "عميل";
    const admin = auth.user.pos === "موظف" || auth.user.pos === "مدير";
    const cols = Object.keys(columns);
    const tabledata = shippings.map((item) => {
        return {
            ...item,
            users_id: item.users.name,
            created_at: moment(item.created_at).format("YYYY-MM-DD"),
        };
    });

    return (
        <Layout auth={auth} errors={errors} heading="اوامر الشحن المرتجعة">
            <div className="mt-10">
                {tabledata.length > 0 ? (
                    <Table
                        data={tabledata}
                        cols={cols}
                        url="/shipping/edit"
                        arabicCols={columns}
                        paginate
                        drive={drive}
                        admin={admin}
                        agent={agent}
                        unShow
                        show
                        returned
                        returnUrl={`/shipping/back`}
                    />
                ) : (
                    <h3 className="text-center"> ليس لديك اوامر شحن مرتجعه </h3>
                )}
            </div>
        </Layout>
    );
};

export default Rindex;
