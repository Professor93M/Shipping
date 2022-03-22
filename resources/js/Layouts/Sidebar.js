import React, { useEffect } from "react";
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
    const [isOpenAgents, setIsOpenAgents] = React.useState(false);
    const [isOpenUsers, setIsOpenUsers] = React.useState(false);
    const [isOpenInvoice, setIsOpenInvoice] = React.useState(false);
    const [isOpenShipping, setIsOpenShipping] = React.useState(false);
    // useEffect(() => {}, []);

    const toggleUsers = () => setIsOpenUsers(!isOpenUsers);
    const toggleAgents = () => setIsOpenAgents(!isOpenAgents);
    const toggleInvoice = () => setIsOpenInvoice(!isOpenInvoice);
    const toggleShipping = () => setIsOpenShipping(!isOpenShipping);

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
                                onClick={toggleUsers}
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

                            <ul
                                id="a"
                                className={` ${isOpenUsers ? "block" : "hidden"
                                    } py-2 space-y-2`}
                            >
                                <li>
                                    <Link
                                        href="/users"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إدارة الموظفين
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/register"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة موظف
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    ) : null}
                    <li>
                        <button
                            type="button"
                            onClick={toggleAgents}
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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

                        <ul
                            id="agents"
                            className={`py-2 space-y-2 ${isOpenAgents ? "block" : "hidden"
                                } `}
                        >
                            <li>
                                <Link
                                    href="/agents"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    إدارة العملاء
                                </Link>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <Link
                                        href="/register"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة عميل
                                    </Link>
                                </li>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            onClick={toggleInvoice}
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
                        <ul
                            id="invoices"
                            className={` ${isOpenInvoice ? "block" : "hidden"
                                } py-2 space-y-2`}
                        >
                            <li>
                                <Link
                                    href="/invoice"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    إدارة الفواتير
                                </Link>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <Link
                                        href="/invoice/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        إضافة فاتورة
                                    </Link>
                                </li>
                            ) : null}
                            <li>
                                <Link
                                    href="/invoice/return"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    الفواتير المرتجعة
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center p-2 w-full gap-x-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            onClick={toggleShipping}
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
                        <ul
                            id="shippings"
                            className={` ${isOpenShipping ? "block" : "hidden"
                                } py-2 space-y-2`}
                        >
                            <li>
                                <Link
                                    href="/shipping"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    اوامر الشحن
                                </Link>
                            </li>
                            {auth.user.pos !== "مدير" ? (
                                <li>
                                    <Link
                                        href="/shipping/create"
                                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        اضف امر شغل
                                    </Link>
                                </li>
                            ) : null}
                            <li>
                                <Link
                                    href="/status"
                                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    اعدادات اوامر الشحن
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
