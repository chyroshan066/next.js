"use client";

import { getUser } from "@/api";
import { useEffect, useState } from "react";

export const FetchAPI = () => {
    const [msg, setMsg] = useState("Loading");

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getUser();
                console.log(data);
                setMsg(data.message);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    // useEffect(() => {
    //     console.log(`Current message: ${msg}`);
    // }, [msg]);

    return <>{msg}</>;
}