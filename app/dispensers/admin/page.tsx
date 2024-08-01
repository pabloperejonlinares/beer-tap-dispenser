'use client'

import React, { useState, useRef } from "react";

import { DispensersSkeleton } from "@/app/components/skeletons"
import DispenserList from "@/app/components/dispenserList";
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const flowRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const newDispenser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await fetch('http://localhost:8002/api/dispenser/', {
      method: 'post',
      body: JSON.stringify({
        flow_volume: flowRef.current?.value || 0.0653
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .catch((err) => {
      setErrorMessage('Server err.')
      console.error(err)
      setIsLoading(false)
    })

    const { id } = response
    localStorage.setItem(`dispenser ${id}`, id);
    setIsLoading(false)
  }

  const createAction = (e: { preventDefault: () => void; }) => {
    if (flowRef.current?.value !== '') {
      setErrorMessage('')
      newDispenser(e)
      } else {
        setErrorMessage('Invalid')
      }
  }

  return (
    !isLoading
      ? <><DispenserList />
      <div className="grid place-items-center h-80 w-80 rounded-xl bg-gray-50 p-2 shadow-lg hover:shadow-2xl">
        <div className={`flex w-32 place-items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-700`}>
          <h3 className="text-sm font-medium"><b>New Dispenser</b></h3>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <label>Flow volume: </label>
          <input ref={flowRef} type="number" placeholder="0.0653" className="w-24 h-8 rounded-lg"/>
          {errorMessage && (
            <div className="flex flex-row">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </div>
        <span onClick={(e) => createAction(e)} className="text-9xl cursor-pointer">+</span>
      </div></>
      : <DispensersSkeleton />
  )
}