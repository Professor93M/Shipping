import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormItem from "@/Components/FormItem";
import { Link, useForm } from "@inertiajs/inertia-react";
import Combo from "@/Components/Combo";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    console.log(props);
    const { data, setData, post, processing, reset } = useForm({
        name: props.shipping[0].name || "",
        num: props.shipping[0].num || "",
        address: props.shipping[0].address || "",
        arvdate: props.shipping[0].arvdate || "",
        shipdate: props.shipping[0].shipdate || "",
        weight: props.shipping[0].weight || "",
        mobile: props.shipping[0].mobile || "",
        shipdesc: props.shipping[0].shipdesc || "",
        shipname: props.shipping[0].shipname || "",
        desc: props.shipping[0].desc || "",
        nameto: props.shipping[0].nameto || "",
        agents_id: props.shipping[0].users.id || "",
        statuses_id: props.shipping[0].statuses.id || "",
        actions_id: props.shipping[0].actions.id || "",
        _method: "PUT",
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/shipping/update/${props.shipping[0].id}`);
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
                                options={props.statuses}
                                edit
                                placeholder={data.statuses_id}
                                handleChange={(e) => handleChange(e)}
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
                                edit
                                options={props.actions}
                                placeholder={data.actions_id}
                                handleChange={(e) => handleChange(e)}
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
                                            name="agents_id"
                                            options={props.agents}
                                            placeholder={data.agents_id}
                                            edit
                                            handleChange={(e) =>
                                                handleChange(e)
                                            }
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
                        تحديث
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
