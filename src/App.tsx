import React, { useState } from 'react'
import Form from './Components/Form'
import Header from './Components/Header'
import PlusButton from './Components/PlusButton'
import TaskList from './Components/TaskList'

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className='container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen'>
      <Header />
      <TaskList />
      <Form inProp={showForm} onClose={() => setShowForm(false)} />
      <PlusButton onClick={() => setShowForm(!showForm)} />
    </main>
  )
}

export default App