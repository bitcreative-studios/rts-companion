import React from 'react'
import { XIcon } from '@heroicons/react/solid'

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
      <div className="px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className="text-lg font-medium text-gray-900"> Panel title </h1>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              // onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close panel</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        {/* Replace with your content */}
        <div className="absolute inset-0 px-4 sm:px-6">
          <div
            className="h-full border-2 border-dashed border-gray-200"
            aria-hidden="true"
          />
        </div>
        {/* /End replace */}
      </div>
    </div>
  )
}

export default Sidebar
