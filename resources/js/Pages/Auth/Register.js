import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import FormItem from "@/Components/FormItem";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Combo from "@/Components/Combo";

export default function Register({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        sname: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        pos: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleClick = () => {
        Inertia.get("/");
    };

    const poss = [
        {
            name: "إدارة",
        },
        {
            name: "سائق",
        },
        {
            name: "موظف",
        },
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="إضافة مستخدم" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <FormItem
                    name="name"
                    type="text"
                    label="الاسم الكامل"
                    forInput="name"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="email"
                    type="email"
                    label="البريد الالكتروني"
                    forInput="email"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="password"
                    type="password"
                    label="كلمة المرور"
                    forInput="password"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="password_confirmation"
                    type="password"
                    label="تأكيد كلمة المرور"
                    forInput="password_confirmation"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="address"
                    type="text"
                    label="العنوان"
                    forInput="address"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="countery"
                    type="text"
                    label="البلد"
                    forInput="countery"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                {auth.user && (
                    <FormItem>
                        <Combo
                            className={
                                "block w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                            }
                            name="pos"
                            add
                            options={poss}
                            placeholder="المسمى الوظيفي"
                            handleChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </FormItem>
                )}

                <div className="flex items-center justify-around mt-4">
                    <Button primary processing={processing}>
                        اضافة
                    </Button>
                    <Button type="button" handleClick={handleClick}>
                        رجوع
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
