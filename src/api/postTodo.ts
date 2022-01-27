import axios from "axios";
import { TodoBody } from "../types/todos.type";

export const postTodo = async (data: TodoBody): Promise<void> => {
    try {
        await axios({
            method: 'POST',
            url: 'https://iqbaladudu-todo-list.herokuapp.com/api/add-todo',
            data
        })
    } catch (error) {
        throw error
    }
}