import React from 'react'
import clsx from 'clsx'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'

const stats = [
  {
    name: 'Cycle 1',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'AD HOC 1',
    stat: '58.16%',
    previousStat: '56.14%',
    change: '2.02%',
    changeType: 'increase',
  },
  {
    name: 'RTS 1',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease',
  },
  {
    name: 'RTS 2',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease',
  },
]

const cycles = [
  {
    cycle: 'CYCLE_1',
    shorthand: 'C1',
    href: '#',
    volume: 16,
    routes: 16,
    bgColor: 'bg-pink-600',
  },
  {
    cycle: 'AD_HOC_1',
    shorthand: 'AH',
    href: '#',
    volume: 12,
    routes: 16,
    bgColor: 'bg-purple-600',
  },
  {
    cycle: 'RTS_1',
    shorthand: 'R1',
    href: '#',
    volume: 16,
    routes: 16,
    bgColor: 'bg-yellow-500',
  },
  {
    cycle: 'RTS_2',
    shorthand: 'R2',
    href: '#',
    volume: 8,
    routes: 16,
    bgColor: 'bg-green-500',
  },
]
const VolumeRouteSummary = () => (
  <div>
    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
      Volume & Route Summary
    </h2>
    <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow space-y-4 divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      {stats.map(item => (
        <div key={item.name} className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">{item.name}</dt>
          <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {item.stat}
              <span className="ml-2 text-sm font-medium text-gray-500">
                from {item.previousStat}
              </span>
            </div>

            <div
              className={clsx(
                item.changeType === 'increase'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
              )}
            >
              {item.changeType === 'increase' ? (
                <ArrowSmUpIcon
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowSmDownIcon
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by
              </span>
              {item.change}
            </div>
          </dd>
        </div>
      ))}
    </dl>
  </div>
)
export default VolumeRouteSummary
/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]
