import React from 'react'
import { useAsync } from "react-async"
import axios from 'axios'

const loadPosts = async () => {
  const response = await axios.get('https://guarded-mountain-76807.herokuapp.com/api/posts')
  if (!response.statusText === "OK") throw new Error(response.statusText)
  
  return response.data
}

const App = () => {
  const { data, error, isPending } = useAsync({ promiseFn: loadPosts})
  if (isPending) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    
    return (
      <div>
        <strong>Posts:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  return null
}

export default App
