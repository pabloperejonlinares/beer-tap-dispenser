'use client'

import React, { useEffect, useState } from "react";

import { Usage, Dispenser } from "./interfaces";

export default function DispenserAdminDetails({
  id
}: {
  id: string
}) {
  const [currentDispenser, setCurrentDispenser] = useState<Dispenser>()

  const getDispenser = async() => {
    let dispenserUsage: Usage
    let dispenserUsages: Array<Usage> = []
    const response = await fetch(`http://localhost:8002/api/dispenser/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
    }).then((response) => response.json())
    const { amount, usages } = response
    usages.map((item: { opened_at: any; closed_at: any; flow_volume: any; total_spent: any; }) => (
      dispenserUsage = {
        opened_at: item.opened_at,
        closed_at: item.closed_at,
        flow_volume: item.flow_volume,
        total_spent: item.total_spent
      },
      dispenserUsages.push(dispenserUsage)
    ))
    setCurrentDispenser({
      dispenserId: id,
      amount: amount,
      usages: dispenserUsages
    })
  }

  const timeUsed = (usages: Array<Usage> | undefined) => {
    let secondsUsed: number = 0 
    usages?.map((item: { opened_at: any; closed_at: any; flow_volume: any; total_spent: any; }) => (
      secondsUsed += item.closed_at !== null ? new Date(item.closed_at).getTime() - new Date(item.opened_at).getTime() : new Date().getTime() - new Date(item.opened_at).getTime()
    ))
    return secondsUsed
  }

  useEffect(() => {
    getDispenser()
  }, [])
  return (
    <div className="flex flex-col">
      <div>Dispenser <i>{id}</i></div>
      <table className="table-fixed mt-10">
        <tbody>
          <tr>
            <td><b>Amount</b></td>
            <td>{currentDispenser?.amount}</td>
          </tr>
          <tr>
            <td><b>Times used</b></td>
            <td>{currentDispenser?.usages.length}</td>
          </tr>
          <tr>
            <td><b>Time used in seconds</b></td>
            <td>{timeUsed(currentDispenser?.usages)/1000}''</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
