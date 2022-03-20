import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Checkbox from "@/Components/Checkbox";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import FormItem from "@/Components/FormItem";
import { Inertia } from "@inertiajs/inertia";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
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

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <FormItem
                    name="email"
                    type="email"
                    label="الاسم"
                    placeholder=" "
                    required
                    handleChange={handleChange}
                />

                <FormItem
                    name="password"
                    type="password"
                    label="كلمة المرور"
                    placeholder=" "
                    required
                    handleChange={handleChange}
                />

                <div className="flex w-full items-center justify-between mt-4">
                    <label className="flex items-center ">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={handleChange}
                        />

                        <span className="mr-2 text-sm font-tajawal-light font-bold text-gray-600">
                            تذكرني
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button primary processing={processing}>
                        دخول
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
