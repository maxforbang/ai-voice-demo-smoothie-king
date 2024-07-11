'use client'

import { callSquad } from '@/lib/callSquad'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useState } from 'react'

export function PhoneInput() {
  const { mutate, isPending, error, data, isFetching } = useMutation({
    queryFn: callSquad,
  })

  const [clicked, setClicked] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitting event.')
    setClicked(true)
    callSquad(event.target.phone.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-48 flex-col gap-4">
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone Number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="555-555-5555"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={clicked}
        className={clsx("duration-300 w-full rounded-md  px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ", !clicked ? "bg-sky-700 hover:bg-sky-500" : "bg-emerald-600 hover:bg-emerald-500")}
      >
        <div>
          {clicked ? (
            <CheckCircleIcon className="h-6 w-6 mx-auto" />
          ) : (
            <p>Call</p>
          )}
        </div>
      </button>
    </form>
  )
}
