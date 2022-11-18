import axios from "axios";

export const client = axios.create({
    baseURL: "https://63766dd381a568fc25fe88a4.mockapi.io/user",
});