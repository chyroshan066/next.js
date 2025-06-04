import { axiosClient } from "./axiosClient";

export const getUser = async () => {
    return await axiosClient.get("api/home");
};