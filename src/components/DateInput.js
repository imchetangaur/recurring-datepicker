import React from 'react'
import { format } from 'date-fns'

export const DateInput = ( { startDate , setStartDate , endDate , setEndDate } ) => {
  return (
    <div className='space-y-4'>
        <div>
            <label className='block mb-1'>Start Date:</label>
            <input
                type="date"
                value={format(startDate , 'yyyy-MM-dd')}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                className='border rounded px-4 py-2 bg-gray-500 w-full'
            />
        </div>

        <div>
            <label className='block mb-1'>End Date:</label>
            <input
                type="date"
                value={endDate ? format(endDate , 'yyyy-MM-dd') : ''}
                onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                className='border rounded px-4 py-2 bg-gray-500 w-full'
            />
        </div>
    </div>
  )
}
