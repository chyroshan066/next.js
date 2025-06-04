import { formDataType } from "@/types";
import { axiosClient } from "./axiosClient";

export const postForm = (data: formDataType) => {
    return axiosClient.post("/form", {
        name: data.name,
        message: data.message,
    })
}