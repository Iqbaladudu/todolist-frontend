import axios, { AxiosResponse } from "axios";
import { GetTodoResult } from "../types/todos.type";

export const getTodo = async (id: string): Promise<AxiosResponse<GetTodoResult>> => {
    try {
        const res = await axios({
            method: 'GET',
            url: `https://iqbaladudu-todo-list.herokuapp.com/api/todo/${id}`
        })

        return res
    } catch (error) {
        throw error
    }
}