import axios from "axios"
import { TodoStatus } from "../enum/todos.enum"
import { TodoBody } from "../types/todos.type"
import { getTodo } from "./getTodo"

export const updateTodo = async (id: string): Promise<void> => {
    try {
        const getTodoRes = await getTodo(id)

        if (getTodoRes.status === 200) {
            const todo = getTodoRes.data.result
            const body: TodoBody = {
                title: todo.title,
            }

            todo.status === TodoStatus.completed ? body.status = 'uncompleted' : body.status = 'completed'

            await axios({
                method: 'PUT',
                url: `https://iqbaladudu-todo-list.herokuapp.com/api/${id}`,
                data: body
            })
        }
    } catch (error) {
        throw error
    }
}