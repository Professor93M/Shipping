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
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/actions/store");
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
        <Layout auth={props.auth} errors={props.errors} heading="إضافة إجراء">
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
