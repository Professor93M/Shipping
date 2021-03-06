import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormItem from "@/Components/FormItem";
import { Link, useForm } from "@inertiajs/inertia-react";
import Combo from "@/Components/Combo";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        type: "",
        name: "",
        phone: "",
        address: "",
        country: "",
    });

    const types = [
        {
            name: "شركة",
        },
        {
            name: "شخص",
        },
    ];
    const submit = (e) => {
        e.preventDefault();

        post("/agents/store");
    };
    const handleClick = () => {
        history.back()
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
        <Layout auth={props.auth} errors={props.errors} heading="إضافة عميل">
            <form onSubmit={submit} className="mt-12">
                <div className="grid grid-cols-4 items-center justify-around gap-x-4 ">
                    <div className="col-span-4 w-1/4">
                        <FormItem>
                            <Combo
                                className={
                                    "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                }
                                name="type"
                                add
                                options={types}
                                placeholder="النوع"
                                handleChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </FormItem>
                    </div>
                    <div className="col-span-1">
                        <FormItem
                            name="name"
                            type="text"
                            label="الاسم"
                            forInput="name"
                            required
                            placeholder=" "
                            handleChange={handleChange}
                        />
                    </div>

                    <div className="col-span-1">
                        <FormItem
                            name="phone"
                            type="tel"
                            label="الهاتف"
                            forInput="phone"
                            required
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
                            required
                            placeholder=" "
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <FormItem
                            name="country"
                            type="text"
                            label="الدولة"
                            forInput="country"
                            required
                            placeholder=" "
                            handleChange={handleChange}
                        />
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
