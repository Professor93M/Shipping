import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormItem from "@/Components/FormItem";
import { Link, useForm } from "@inertiajs/inertia-react";
import Combo from "@/Components/Combo";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    const { data, setData, post, processing, reset } = useForm({
        name: props.shipping.name || "",
        num: props.shipping.num || "",
        address: props.shipping.address || "",
        arvdate: props.shipping.arvdate || "",
        shipdate: props.shipping.shipdate || "",
        weight: props.shipping.weight || "",
        mobile: props.shipping.mobile || "",
        shipdesc: props.shipping.shipdesc || "",
        shipname: props.shipping.shipname || "",
        desc: props.shipping.desc || "",
        nameto: props.shipping.nameto || "",
        agents_id: props.agents[0].id || "",
        _method: "PUT",
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/shipping/update/${props.shipping.id}`);
        // console.log(data);
    };
    const handleClick = () => {
        Inertia.get("/");
    };
    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleAction = (event) => {
        const actionId = props.actions.filter((action) => {
            if (action.name === event.target.value) {
                return action.id;
            }
        });
        setData({
            ...data,
            // agents_id: agentId[0].id,
            // // statuses_id: statusesId[0].id,
            actions_id: actionId[0].id,
        });
    };
    const handleStatus = (event) => {
        const statusesId = props.statuses.filter((status) => {
            if (status.name === event.target.value) {
                return status.id;
            }
        });

        setData({
            ...data,
            // agents_id: agentId[0].id,
            statuses_id: statusesId[0].id,
            // actions_id: actionId[0].id,
        });
    };

    return (
        <Layout
            auth={props.auth}
            errors={props.errors}
            heading={`عملية الشحن  ${props.shipping.name}`}
        >
            <form onSubmit={submit} className="mt-12">
                <div className="flex w-1/2 gap-x-4">
                    <div className="col-span-2">
                        <FormItem>
                            <Combo
                                className={
                                    "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                }
                                name="statuses_id"
                                add
                                options={props.statuses}
                                value={data.statuses_id}
                                placeholder="الحالة"
                                handleChange={(e) => handleStatus(e)}
                            />
                        </FormItem>
                    </div>
                    <div className="col-span-2">
                        <FormItem>
                            <Combo
                                className={
                                    "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                }
                                name="actions_id"
                                add
                                options={props.actions}
                                value={data.actions_id}
                                placeholder="الاجراء"
                                handleChange={(e) => handleAction(e)}
                            />
                        </FormItem>
                    </div>
                </div>
                {props.auth.user.pos !== "عميل" &&
                    props.auth.user.pos !== "سائق" && (
                        <div className="grid grid-cols-4 items-center  justify-around gap-4 ">
                            <span>عملية الشحن</span>
                            <div className="border-2 rounded-md  shadow-md bg-gray-100/75 border-gray-100/75 col-span-4 grid grid-cols-4 gap-x-8 p-4">
                                <div className="col-span-1">
                                    <FormItem
                                        name="name"
                                        type="text"
                                        label="المسمى"
                                        forInput="name"
                                        value={data.name}
                                        required
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="num"
                                        type="number"
                                        label="رقم الامر"
                                        forInput="num"
                                        value={data.num}
                                        required
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="shipdate"
                                        type="date"
                                        label="تاريخ الشحن"
                                        forInput="shipdate"
                                        value={data.shipdate}
                                        required
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="arvdate"
                                        type="date"
                                        label="تاريخ الوصول"
                                        value={data.arvdate}
                                        forInput="arvdate"
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="desc"
                                        type="text"
                                        label="الوصف"
                                        value={data.desc}
                                        forInput="desc"
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <FormItem>
                                        <Combo
                                            className={
                                                "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                            }
                                            name="agent_id"
                                            // add
                                            options={props.agents}
                                            value={data.agents_id}
                                            placeholder="العميل"
                                        />
                                    </FormItem>
                                </div>
                            </div>
                            <span>بيانات المرسل الية</span>
                            <div className="border-2 rounded-md shadow-md bg-gray-100/75 border-gray-100/75 col-span-4 grid grid-cols-4 gap-x-8 p-4">
                                <div className="col-span-1">
                                    <FormItem
                                        name="nameto"
                                        type="text"
                                        label="اسم المرسل اليه"
                                        forInput="nameto"
                                        value={data.nameto}
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="address"
                                        type="text"
                                        label="العنوان"
                                        forInput="address"
                                        value={data.address}
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="mobile"
                                        type="tel"
                                        label="رقم الهاتف"
                                        forInput="mobile"
                                        value={data.mobile}
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                            </div>
                            <span>بيانات الشحنة</span>
                            <div className="border-2 rounded-md shadow-md bg-gray-100/75 border-gray-100/75 col-span-4 grid grid-cols-4 gap-x-8 p-4">
                                <div className="col-span-1">
                                    <FormItem
                                        name="shipname"
                                        type="text"
                                        value={data.shipname}
                                        label="اسم الشحنة"
                                        forInput="shipname"
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="shipdesc"
                                        type="text"
                                        label="الوصف"
                                        forInput="shipdesc"
                                        value={data.shipdesc}
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormItem
                                        name="weight"
                                        type="text"
                                        label="الوزن"
                                        forInput="weight"
                                        value={data.weight}
                                        placeholder=" "
                                        handleChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                <div className="flex items-center justify-center gap-x-8 mt-4">
                    <Button primary processing={processing}>
                        اضافة
                    </Button>
                    <Button type="button" handleClick={handleClick}>
                        رجوع
                    </Button>
                </div>
            </form>
        </Layout>
    );
};

export default Create;
