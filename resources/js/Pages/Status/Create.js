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
        status: "",
        name: "",
        color: "",
    });

    const types = [
        {
            name: "مفتوح",
        },
        {
            name: "مغلق",
        },
    ];
    const submit = (e) => {
        e.preventDefault();

        post("/status/store");
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
        console.log(data);
    };
    return (
        <Layout auth={props.auth} errors={props.errors} heading="إضافة حالة">
            <form onSubmit={submit} className="mt-12">
                <div className="grid grid-cols-4 items-center justify-around gap-x-4 ">
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
                        <FormItem>
                            <Combo
                                className={
                                    "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                }
                                name="status"
                                add
                                options={types}
                                placeholder="الحالة"
                                handleChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </FormItem>
                    </div>

                    <div className="col-span-1 flex items-center justify-center gap-x-4">
                        <span className=" text-sm text-gray-500 dark:text-gray-400 ">
                            اللون
                        </span>
                        <input
                            name="color"
                            type="color"
                            required
                            placeholder=" "
                            onChange={handleChange}
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
