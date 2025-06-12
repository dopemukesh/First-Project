import React from 'react'

const Notification = () => {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">Notification</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Welcome to your notification center!
        </p>
      </div>

      <div className='border dark:border-gray-700/60 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg w-fit'>
        <h3 className="text-md text-gray-600 dark:text-gray-400 font-semibold">No new notifications</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You will see your notifications here.
        </p>
      </div>
    </>
  )
}

export default Notification
