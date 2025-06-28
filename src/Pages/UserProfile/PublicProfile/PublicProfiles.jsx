// src/components/PublicProfiles.jsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchAPI from '../../../api/fetchAPI/FetchAPI2'
import { Button } from '../../../Components/Common/Button/Button'

const PublicProfiles = () => {
  const { role, nameSlug, id } = useParams()

  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    const abort = new AbortController()

    const fetchUser = async () => {
      setStatus('loading')
      try {
        const data = await FetchAPI(`v1/users/${id}/public`, {
          method: 'GET',
          // signal: abort.signal
        })
        setUser(data)
        setStatus('success')
      } catch (err) {
        if (err.name === 'AbortError') return
        console.error(err)
        setError(err.message || 'Unable to fetch')
        setStatus('error')
      }
    }

    fetchUser()
    return () => abort.abort()
  }, [id])

  // loading spinner
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // if completely error, fallback to showing param data
  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-gray-800 dark:text-gray-200">
        <div className="max-w-lg w-full p-6 bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700">
          <h2 className="text-xl font-bold">Failed to load user</h2>
          <p className="text-sm mt-2">Showing limited data from URL:</p>
          <div className="mt-4 space-y-1">
            <div><strong>Role:</strong> {role}</div>
            <div><strong>Name:</strong> {nameSlug.replace(/-/g, ' ')}</div>
            <div><strong>ID:</strong> {id}</div>
          </div>
          <p className="text-red-500 mt-4">{error}</p>
          <Button
            to={-1}
            variant="orange"
            className="mt-4"
          >
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  // success but no user
  if (status === 'success' && !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-500">
        <div className="max-w-md p-4 rounded shadow bg-white dark:bg-gray-800">
          No user found.
        </div>
      </div>
    )
  }

  const {
    name,
    username,
    avatarUrl,
    bio,
    joinedAt,
    stats = {}
  } = user || {}

  return (
    <div className="min-h-screen py-8 px-4 flex justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Sidebar style panel */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow md:col-span-1 flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
            src={avatarUrl || '/default-avatar.png'}
            alt={`${name || username || nameSlug}'s avatar`}
          />
          <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {name || username || nameSlug.replace(/-/g, ' ')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">@{username || nameSlug}</p>
          {bio && <p className="mt-2 text-center text-gray-700 dark:text-gray-300">{bio}</p>}
          {joinedAt && (
            <p className="mt-1 text-xs text-gray-400">
              Joined {new Date(joinedAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* stats panel */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow md:col-span-2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Followers" value={stats.followers} />
            <Stat label="Following" value={stats.following} />
            <Stat label="Posts" value={stats.posts} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Stat = ({ label, value = 0 }) => (
  <div className="text-center bg-gray-100 dark:bg-gray-700 rounded p-4">
    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-300">{label}</div>
  </div>
)

export default PublicProfiles
