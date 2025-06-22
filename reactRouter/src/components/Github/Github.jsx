import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-4xl font-semibold">
      Github Repositories: {data.public_repos}
      <div className="mt-4">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={300}
          className="mx-auto rounded-full"
        />
      </div>
    </div>
  )
}

export default Github

// Loader function
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/rishitamishra')

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data')
  }

  return response.json()
}
