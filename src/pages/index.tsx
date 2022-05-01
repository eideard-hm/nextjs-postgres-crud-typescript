import { Props, Tasks } from 'src/interfaces/tasks.interfaces'

const index = ({ tasks }: Props) => {
  return (
    <>
      {tasks.length === 0 ? (
        <h1>No tasks available</h1>
      ) : (
        <>
          <h1>Tasks list</h1>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

/*
 * Ejecutar código desde un backend
 */

export const getServerSideProps = async () => {
  // hacer una cosulta al backend
  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks: Tasks[] = await res.json()

  return {
    props: {
      tasks
    }
  }
}

export default index
