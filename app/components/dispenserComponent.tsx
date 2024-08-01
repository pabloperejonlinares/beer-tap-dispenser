import React, { useState, useEffect } from "react";

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Usage } from "./interfaces";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function DispenserComponent({
  dispenserId,
  number,
  usages
}: {
  dispenserId: string
  number: number;
  usages: Array<Usage>
}) {

  const [status, setStatus] = useState('')
  const pathname = usePathname()
  
  const href = pathname.includes('admin') ? `/dispensers/admin/dispenser/${dispenserId}/${status}` : `/dispensers/${dispenserId}/${status}`

  useEffect(() => {
    usages[usages.length-1]?.closed_at === null ? setStatus('Opened') : setStatus('Closed')
  }, [])

  return (
    <div className="flex flex-col justify-items-center h-80 w-80 rounded-xl bg-gray-50 p-2 shadow-lg">
      <div className="flex place-content-between p-4">
        {pathname.includes('admin')
          ? <div className={`flex w-16 place-items-center justify-center rounded-lg ${status === 'Opened' ? 'bg-lime-500' : 'bg-red-500' }`}>
          <h3 className="text-sm font-medium">{status}</h3>
        </div> :
        null}
      </div>
      <p
        className='truncate rounded-xl bg-white px-4 py-8 text-center text-2xl'
      >
        Dispenser {number}
      </p>
      <Link href={href}>
        <button className="flex flex-row justify-items-center mt-4 h-32 rounded-lg bg-yellow-400 font-extrabold items-center hover:bg-yellow-600">
            <b className="text-3xl self-center ml-4 text-white">Go to dispenser</b>
            <ArrowRightIcon className="ml-auto mr-4 mt-2 h-8 w-8 text-gray-50" />
        </button>
      </Link>
    </div>
  );
}
