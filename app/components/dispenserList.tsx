'use client'

import React, { useState, useEffect } from "react";

import { usePathname } from 'next/navigation'
import DispenserComponent from "./dispenserComponent";
import { Usage, Dispenser } from "./interfaces";

export default function DispenserList() {
  const [data, setData] = useState<Array<Dispenser>>([])
  const [emptyMessage, setEmptyMessage] = useState('')
  const pathname = usePathname()

  const isAdmin = pathname.includes('admin')

  const getDispensers = async (dispensersLocalstorage: Array<string>) => {
    let dispenser: Dispenser
    let dispenserUsage: Usage
    let dispensers: Array<Dispenser> = []
    for(var i = 0; i < dispensersLocalstorage.length; i++)
      { 
        let dispenserUsages: Array<Usage> = []
        const response = await fetch(`http://localhost:8002/api/dispenser/${dispensersLocalstorage[i]}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => response.json())
        .catch((err) => {
          setEmptyMessage('No dispensers yet! Sorry for the inconvenience')
          console.error(err)
        })
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

        dispenser = {
          dispenserId: dispensersLocalstorage[i],
          amount: amount,
          usages: dispenserUsages
        }
        dispensers.push(dispenser)
      }
      setData(dispensers)
      setEmptyMessage('No dispensers yet! Sorry for the inconvenience')
  }

  useEffect(() => {
    const dispensersLocalstorage: string[] = []
    Object.keys(localStorage).map((item, idx) => {
      if (item.startsWith('dispenser')) {
        const currentDispenser = localStorage.getItem(item) || '{}';
        dispensersLocalstorage.push(currentDispenser)
      }
    })
    getDispensers(dispensersLocalstorage)
  }, [])

  const _renderDispenserList = () => data.map((item, idx) => (
    <DispenserComponent
      number={idx + 1}
      key={idx}
      dispenserId={item.dispenserId}
      usages={item.usages}
    />))
  return (
    data.length > 0
      ? _renderDispenserList()
      : !isAdmin 
        ? <span>{emptyMessage}</span>
        : null
  )
}