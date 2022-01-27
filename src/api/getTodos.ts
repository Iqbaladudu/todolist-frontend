import axios from 'axios'
import { Todos } from '../types/todos.type'

export const getTodos = async (): Promise<Todos> => {
    try {
        const res = await axios.get('https://iqbaladudu-todo-list.herokuapp.com/api/todos')

        return res.data
    } catch (error) {
        throw error
    }
}