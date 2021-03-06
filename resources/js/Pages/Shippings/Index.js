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
const Index = ({ auth, errors, shippings, columns }) => {
    const { data, setData, get, processing, reset } = useForm({
        date_from: "",
        date_to: "",
    });

    const [search, setSearch] = useState("");

    const drive = auth.user.pos === "سائق";

    const agent = auth.user.pos === "عميل";

    const admin = auth.user.pos === "موظف" || auth.user.pos === "مدير";

    // const unShow =
    //     auth.user.pos === "مدير" ||
    //     auth.user.pos === "موظف" ||
    //     auth.user.pos === "عميل";
    const cols = Object.keys(columns);
    const tabledata = shippings.map((item) => {
        return {
            ...item,
            statuses_id: item.statuses_id ? (
                <span
                    style={{
                        background: item.statuses.color,
                    }}
                    key={item.statuses_id}
                    className={`w-4 h-4 p-1 rounded-md text-default `}
                >
                    {item.statuses.name}
                </span>
            ) : (
                "لم تحدد"
            ),
            actions_id: item.actions_id ? item.actions.name : "لم يحدد",
            users_id: item.users.name,
            created_at: moment(item.created_at).format("YYYY-MM-DD"),
            status: item.status === null ? "غير مدفوعة" : "مدفوعة",
        };
    });

    useEffect(() => {
        search.length > 0 &&
            Inertia.get(
                `/shipping?`,
                { id: search },
                { replaces: true, preserveState: true }
            );
    }, [search]);

    const submit = (e) => {
        e.preventDefault();
        get(`/shipping?`, { date_from: data.from, date_to: data.to });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const dateFilter = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Layout auth={auth} errors={errors} heading="اوامر الشحن">
            <div className="grid grid-cols-1">
                {auth.user.pos !== "سائق" && auth.user.pos !== "عميل" && (
                    <div className="col-span-1 px-2">
                        <Link
                            href="/shipping/create"
                            className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>إضافة فاتورة</span>
                        </Link>
                    </div>
                )}

                <div className="flex justify-around items-center mt-3">
                    <form className=" col-span-2">
                        <div className=" px-2 flex items-center gap-x-3">
                            <div className="col-span-1 flex items-center  gap-x-8">
                                <label htmlFor="date_from">من :</label>
                                <Input
                                    type="date"
                                    name="date_from"
                                    value={data.date_from}
                                    className=" text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark"
                                    handleChange={dateFilter}
                                />

                                <label htmlFor="date_from">الى :</label>
                                <Input
                                    type="date"
                                    name="date_to"
                                    value={data.date_to}
                                    className=" text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark"
                                    handleChange={dateFilter}
                                />
                            </div>

                            <div className="col-span-1">
                                <Button
                                    className="w-fit"
                                    handleClick={submit}
                                    primary
                                    processing={processing}
                                >
                                    بحث
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-x-4">
                        <div className=" px-2">
                            <FormItem
                                name="agents_id"
                                type="text"
                                label="رقم العميل"
                                value={search}
                                forInput="agents_id"
                                required
                                placeholder=" "
                                handleChange={handleChange}
                            />
                        </div>
                        <Link
                            className="bg-primary-default rounded-full p-2"
                            href="/shipping"
                        >
                            <GrRefresh />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
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
                        returnUrl="shipping/return"
                    />
                ) : (
                    <h3 className="text-center"> ليس لديك اوامر شحن بعد </h3>
                )}
            </div>
        </Layout>
    );
};

export default Index;
