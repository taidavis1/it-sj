"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.push("/");
    }, [router]);
    return null;
};

export default NotFound;