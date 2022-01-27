import React from 'react'
import TaskCard from './TaskCard'
import { useQuery } from 'react-query'
import { getTodos } from '../api/getTodos'
const TaskList: React.FC = () => {
    const { isLoading, isError, error, data} = useQuery('todos', getTodos)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (isError) {
        return (
            <div>Ada error...{error}</div>
        )
    }

    return (
        <section className='flex flex-col overflow-x-hidden oveflow-y-auto h-taskList rounded'>
            {data?.todos.map(({ title, _id, status }) => {
                return (
                    <TaskCard key={_id} title={title} taskId={_id} status={status} />
                )
            })}
        </section>
    )
}

export default TaskList