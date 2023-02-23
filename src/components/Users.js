import { useState, useEffect } from 'react'
import User from './User'

function Users() {
  const [users, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setPosts(users))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1>Error : {error}</h1>
  }
  return (
    <>
      <h1>Users Data</h1>
      <hr />
      <div className='usersData'>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          users.map((user) => <User key={user.id} {...user} />)
        )}
      </div>
    </>
  )
}

export default Users
