import React from "react";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Dashboard({ auth, errors }) {
    return (
        <Layout auth={auth} errors={errors} heading="لوحة التحكم">
            <div className=" px-2">
                <h2 className="text-xl">
                    {" "}
                    مرحبا بك{" "}
                    <span className="text-primary-default">
                        {auth.user.name}
                    </span>{" "}
                    في شركة العاصمة لنقل البضائع{" "}
                </h2>
            </div>
            <div className=" mt-10">
                يسعدنا ان تقدم المساعدة لك في رفع مستوى إدارة اعمالك وتحسين
                تجربتك في تنفيذ المشاريع التي تحتاجها
            </div>
            <div className=" mt-12 px-2 grid grid-cols-3 justify-items-center gap-8">
                {auth.user.pos !== "عميل" && auth.user.pos !== "سائق" ? (
                    <>
                        <Link
                            href="/register"
                            className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-cyan-800 hover:bg-cyan-900 text-white"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>إضافة عميل جديد</span>
                        </Link>
                        <Link
                            href="/invoice/create"
                            className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-cyan-800 hover:bg-cyan-900 text-white"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>إنشاء فاتورة جديدة</span>
                        </Link>
                        <Link
                            href="/shipping/create"
                            className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-cyan-800 hover:bg-cyan-900 text-white"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>إنشاء امر شحن</span>
                        </Link>
                        <Link
                            href="/agents"
                            className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>عرض العملاء</span>
                        </Link>
                        <Link
                            href="/invoice"
                            className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                        >
                            <AiOutlinePlusCircle className="bg-inherit" />
                            <span>عرض الفواتير</span>
                        </Link>
                    </>
                ) : ""}

                <Link
                    href="/shipping"
                    className="w-52 flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>عرض اوامر الشحن</span>
                </Link>
            </div>
        </Layout>
    );
}
