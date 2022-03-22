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
            <div className=" mt-12 px-2 flex items-center gap-x-8">
                <Link
                    href="/register"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>إضافة عميل جديد</span>
                </Link>
                <Link
                    href="/invoice/create"
                    className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                >
                    <AiOutlinePlusCircle className="bg-inherit" />
                    <span>إنشاء فاتورة جديدة</span>
                </Link>
            </div>
        </Layout>
    );
}
