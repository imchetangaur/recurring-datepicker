import React from 'react'
import { useState } from 'react'

export const RecurrenceOptions = ( { recurrence , setRecurrence , interval , setInterval } ) => {
    
  return (
    <div className='space-y-4'>
        
        <div>
            <label className='block mb-1'>
                Recurrence Pattern:
            </label>

            <select 
                value={recurrence}
                onChange={(e) => setRecurrence(e.target.value)}
                className='border rounded px-4 bg-gray-500 py-2 w-full'
            >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly" >Yearly</option>
            </select>
        </div>


        <div>
            <label className='block mb-1'>Repeat Every X {recurrence}:</label>

            <input
                type="number"
                value={interval}
                onChange={(e) => setInterval(e.target.value)}

                className='border rounded px-4 py-2 bg-gray-500 w-full'
            />
        </div>

    </div>
  )
}
