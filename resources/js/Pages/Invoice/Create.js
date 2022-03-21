import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import FormItem from "@/Components/FormItem";
import { Link, useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import Combo from "@/Components/Combo";

const Create = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        items: [
            {
                type: "",
                desc: "",
                price: "",
                qty: "",
                discount: "",
                status: "",
            },
        ],
        total: 0,
        agent_id: "",
    });

    useEffect(() => {
        if (data.items) {
            let total = 0;
            data.items.forEach((item) => {
                total += item.price * item.qty - item.discount;
            });

            if (total > 0) {
                setData({ ...data, total });
            } else {
                setData({ ...data, total: 0 });
            }
        }
    }, [data.items]);

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        // post("/invoice/store");
    };
    const handleClick = () => {
        Inertia.get("/");
    };
    const handleChange = (event, index) => {
        const inputs = [...data.items];
        inputs[index][event.target.name] = event.target.value;
        setData({ items: inputs, total: data.total });
    };
    const handleAgent = (event) => {
        const agentId = props.agents.filter((agent) => {
            if (agent.name === event.target.value) {
                return agent.id;
            }
        });

        setData({ ...data, agent_id: agentId[0].id });
    };

    const addInputs = () => {
        const newInputs = [...data.items];
        newInputs.push({
            type: "",
            desc: "",
            price: "",

            qty: "",
            discount: "",
            status: "",
        });
        setData({ ...data, items: newInputs });
    };

    const removeInputs = (index) => {
        const newData = [...data.items];
        newData.splice(index, 1);
        setData({ ...data, items: newData });
    };

    return (
        <Layout auth={props.auth} errors={props.errors} heading="إضافة فاتورة">
            <form onSubmit={submit} className="mt-12">
                <div className="grid grid-cols-4 items-center justify-around gap-x-4 ">
                    {data.items.map((item, index) => (
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
                    <div className="col-span-2 mt-12">
                        <FormItem
                            name="total"
                            type="text"
                            label="المجموع"
                            forInput="total"
                            min="0"
                            disabled
                            value={data.total}
                            placeholder=" "
                            handleChange={(e) => handleChange(e, index)}
                        />
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
