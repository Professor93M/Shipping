import React, { useEffect, useState } from "react";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import FormItem from "@/Components/FormItem";
import Button from "@/Components/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useForm } from "@inertiajs/inertia-react";
import moment from "moment";
import { Inertia } from "@inertiajs/inertia";
import Input from "@/Components/Input";

const Index = ({ auth, errors, invoice, columns }) => {
    const { data, setData, get, processing, reset } = useForm({
        date_from: "",
        date_to: "",
    });

    const [search, setSearch] = useState("");

    useEffect(() => {
        search.length > 0 &&
            Inertia.get(
                `/invoice?`,
                { id: search },
                { replaces: true, preserveState: true }
            );
    }, [search]);

    const submit = (e) => {
        e.preventDefault();
        get(
            `/invoice?`,
            { date_from: data.from, date_to: data.to },
            { replaces: true, preserveState: true }
        );
    };

    const cols = Object.keys(columns);
    const tabledata = invoice.map((item) => {
        return {
            ...item,
            users_id: item.users.name,
            created_at: moment(item.created_at).format("YYYY-MM-DD"),
            status: item.status === null ? "غير مدفوعة" : "مدفوعة",
        };
    });

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
        <Layout auth={auth} errors={errors} heading="الفواتير">
            <div className="grid grid-cols-2">
                <div className="col-span-1 px-2">
                    <Link
                        href="/invoice/create"
                        className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                    >
                        <AiOutlinePlusCircle className="bg-inherit" />
                        <span>إضافة فاتورة</span>
                    </Link>
                </div>

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
                <form onSubmit={submit} className=" col-span-2">
                    <div className=" px-2 grid grid-cols-2 items-center gap-x-3">
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
                                primary
                                processing={processing}
                            >
                                بحث
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className=" mt-10">
                {tabledata.length > 0 ? (
                    <Table
                        data={tabledata}
                        cols={cols}
                        user
                        arabicCols={columns}
                        paginate
                    />
                ) : (
                    <h3 className="text-center"> ليس لديك فواتير بعد </h3>
                )}
            </div>
        </Layout>
    );
};

export default Index;
