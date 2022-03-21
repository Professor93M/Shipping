import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import FormItem from "@/Components/FormItem";
import { Link, useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm([
        {
            type: "",
            desc: "",
            price: "",
            qty: "",
            discount: "",
            status: "",
        },
    ]);

    // const statuses = [
    //     {
    //         name: "مدفوعة",
    //     },
    //     {
    //         name: "غير مدفوعة",
    //     },
    // ];

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        // post("/invoice/store");
    };
    const handleClick = () => {
        Inertia.get("/");
    };
    const handleChange = (event, index) => {
        const inputs = [...data];
        inputs[index][event.target.name] = event.target.value;
        setData(inputs);
    };

    const addInputs = () => {
        setData([
            ...data,
            {
                type: "",
                desc: "",
                price: "",
                qty: "",
                discount: "",
                status: "",
            },
        ]);
    };

    const removeInputs = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <Layout auth={props.auth} errors={props.errors} heading="إضافة فاتورة">
            <form onSubmit={submit} className="mt-12">
                <div className="grid grid-cols-4 items-center justify-around gap-x-4 ">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-4 flex items-center gap-4"
                        >
                            <FormItem
                                name="type"
                                type="text"
                                label="البند"
                                forInput="type"
                                required
                                placeholder=" "
                                handleChange={(e) => handleChange(e, index)}
                            />
                            <FormItem
                                name="desc"
                                type="text"
                                label="الوصف"
                                forInput="desc"
                                required
                                placeholder=" "
                                handleChange={(e) => handleChange(e, index)}
                            />

                            <FormItem
                                name="price"
                                type="number"
                                label="السعر"
                                forInput="price"
                                min="0"
                                required
                                placeholder=" "
                                handleChange={(e) => handleChange(e, index)}
                            />

                            <FormItem
                                name="qty"
                                type="number"
                                label="الكمية"
                                min="1"
                                forInput="qty"
                                required
                                placeholder=" "
                                handleChange={(e) => handleChange(e, index)}
                            />
                            <FormItem
                                name="discount"
                                type="number"
                                label="الخصم"
                                forInput="discount"
                                required
                                placeholder=" "
                                handleChange={(e) => handleChange(e, index)}
                            />
                            {/* <FormItem>
                                <Combo
                                    className={
                                        "block w-full text-sm  text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-default focus:outline-none focus:ring-0 font-semibold focus:border-dark peer"
                                    }
                                    name="status"
                                    add
                                    options={statuses}
                                    placeholder="الحالة"
                                    handleChange={(e) => handleChange(e, index)}
                                />
                            </FormItem> */}
                            <Button
                                primary
                                type="button"
                                handleClick={addInputs}
                            >
                                +
                            </Button>
                            <Button
                                type="button"
                                handleClick={() => removeInputs(index)}
                            >
                                -
                            </Button>
                        </div>
                    ))}
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
