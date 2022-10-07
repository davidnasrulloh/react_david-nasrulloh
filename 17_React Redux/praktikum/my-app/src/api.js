import axios from "axios";

export const todo = axios.create({
    baseURL: "https://stirred-rhino-39.hasura.app/api/rest/todo",
    headers: {
        "x-hasura-admin-secret": "2T083plTMGttLOXsgGkiRGPW3DPK8ChI49T3g3xy7QbUbvIFyPgJ5o3GTXMYfZTj",
    },
});

export const getTodo = async() => {
    const response = await todo.get("/");
    return response.data.praktikum_todo;
};