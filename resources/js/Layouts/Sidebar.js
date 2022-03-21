import React from "react";
import {
    AiOutlineDashboard,
    AiOutlineFileText,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiUser2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "@inertiajs/inertia-react";

const Sidebar = ({ auth }) => {
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 pt-12 px-3 min-h-screen bg-white rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            <AiOutlineDashboard className="h-6 w-6 " />
                            <span
                                className="flex-1 ml-3 text-right whitespace-nowrap"
                                sidebar-toggle-item=""
                            >
                                لوحة التحكم
                            </span>
                        </Link>
                    </li>
                    {auth.user.pos === "مدير" ? (
                        <li>
                            <button
                                type="button"
                                className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="a"
                                data-collapse-toggle="a"
                            >
                                <FiUsers className="h-6 w-6 " />
                                <span
                                    className="flex-1 ml-3 text-right whitespace-nowrap"
                                    sidebar-toggle-item=""
                                >
                                    الموظفين
                                </span>
                                <MdKeyboardArrowDown className="w-6 h-6" />
                            </button>

                            <ul id="a" className="hidden py-2 space-y-2">
                                <li>
                                    <a
                                        href="/users"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إدارة الموظفين
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/users/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة موظف
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ) : null}
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="agents"
                            data-collapse-toggle="agents"
                        >
                            <RiUser2Line className="h-6 w-6 " />
                            <span
                                className="flex-1 ml-3 text-right whitespace-nowrap"
                                sidebar-toggle-item=""
                            >
                                العملاء
                            </span>
                            <MdKeyboardArrowDown className="w-6 h-6" />
                        </button>
                        <ul id="agents" className="hidden py-2 space-y-2">
                            <li>
                                <a
                                    href="/agents"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    إدارة العملاء
                                </a>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <a
                                        href="/agents/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة عميل
                                    </a>
                                </li>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="invoices"
                            data-collapse-toggle="invoices"
                        >
                            <AiOutlineShoppingCart className="h-6 w-6 " />
                            <span
                                className="flex-1 ml-3 text-right whitespace-nowrap"
                                sidebar-toggle-item=""
                            >
                                المبيعات
                            </span>
                            <MdKeyboardArrowDown className="w-6 h-6" />
                        </button>
                        <ul id="invoices" className="hidden py-2 space-y-2">
                            <li>
                                <a
                                    href="/invoices"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    إدارة الفواتير
                                </a>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <a
                                        href="/invoice/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة فاتورة
                                    </a>
                                </li>
                            ) : null}
                            <li>
                                <a
                                    href="/invoices/return"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    الفواتير المرتجعة
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="shippings"
                            data-collapse-toggle="shippings"
                        >
                            <AiOutlineFileText className="h-6 w-6 " />
                            <span
                                className="flex-1 ml-3 text-right whitespace-nowrap"
                                sidebar-toggle-item=""
                            >
                                اوامر الشحن
                            </span>
                            <MdKeyboardArrowDown className="w-6 h-6" />
                        </button>
                        <ul id="shippings" className="hidden py-2 space-y-2">
                            <li>
                                <a
                                    href="/shippings"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    اوامر الشحن
                                </a>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <a
                                        href="/shippings/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        اضف امر شغل
                                    </a>
                                </li>
                            ) : null}
                            <li>
                                <a
                                    href="/shippings/settings"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    اعدادات اوامر الشحن
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
