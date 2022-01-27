import axios from "axios"

export const deleteTodo = async (id: string): Promise<void> => {
    try {
        await axios({
            method: 'DELETE',
            url: `https://iqbaladudu-todo-list.herokuapp.com/api/${id}`
        })
    } catch (error) {
        throw error
    }
}