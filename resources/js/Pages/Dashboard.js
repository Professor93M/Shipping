import React from "react";
import Layout from "@/Layouts/Layout";

export default function Dashboard({ auth, errors }) {
    return <Layout auth={auth} errors={errors} heading="لوحة التحكم"></Layout>;
}
