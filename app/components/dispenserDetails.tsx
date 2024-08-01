'use client'

import React, { useState } from "react";

export default function DispenserDetails({
  id,
  status
}: {
  id: string,
  status: string
}) {
  const [currentStatus, setCurrentStatus] = useState(status)

  const modifyDispenser = async() => {
      await fetch(`http://localhost:8002/api/dispenser/${id}`, {
      method: 'put',
      body: JSON.stringify({
        status: currentStatus === 'Opened' ? 'close' : 'open',
        updated_at: new Date().toISOString()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setCurrentStatus(currentStatus === 'Opened' ? 'Closed' : 'Opened')
  }
  return (
    <div className="flex flex-col w-full">
      <div>Dispenser <i>{id}</i></div>
      <div className="flex flex-col place-items-center justify-center h-full">
        <button className={`flex flex-row place-items-center justify-center mt-4 h-96 w-96 rounded-full ${currentStatus === 'Opened' ? 'bg-red-400 hover:bg-red-600' : 'bg-green-400 hover:bg-green-600'} font-extrabold`} onClick={modifyDispenser}>
            <b className="text-9xl text-white">{currentStatus === 'Opened' ? 'Close' : 'Open'}</b>
        </button>
      </div>
    </div>
  );
}
