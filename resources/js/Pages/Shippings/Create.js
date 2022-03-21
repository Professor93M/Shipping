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
        type: "",
        name: "",
        num: "",
        phone: "",
        address: "",
        country: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/shipping/store");
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

    const handleAgent = (event) => {
        const agentId = props.agents.filter((agent) => {
            if (agent.name === event.target.value) {
                return agent.id;
            }
        });

        setData({ ...data, agents_id: agentId[0].id });
    };

    return (
        <Layout auth={props.auth} errors={props.errors} heading="إضافة عميل">
            <form onSubmit={submit} className="mt-12">
                <div className="grid grid-cols-4 items-center  justify-around gap-4 ">
                    <span>عملية الشحن</span>
                    <div className="border-2 rounded-md  shadow-md bg-gray-100/75 border-gray-100/75 col-span-4 grid grid-cols-4 gap-x-8 p-4">
                        <div className="col-span-1">
                            <FormItem
                                name="name"
                                type="text"
                                label="المسمى"
                                forInput="name"
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
                                forInput="desc"
                                placeholder=" "
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="col-span-1">
                            <FormItem>
                                <Combo
                                    className={
                                        "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                    }
                                    name="agent_id"
                                    add
                                    options={props.agents}
                                    value={data.agent_id}
                                    placeholder="العميل"
                                    handleChange={(e) => handleAgent(e)}
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
                                placeholder=" "
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
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
