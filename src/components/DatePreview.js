import React from 'react'
import { format } from 'date-fns'

export const DatePreview = ( { selectedDates } ) => {
  return (
    <div className='mt-4 shadow-2xl p-5 bg-gray-600 rounded'>
        <h3 className='text-xl font-bold'>
            Recurring Dates Preview:
        </h3>

        <ul className='mt-2'>
            {selectedDates.map((date,idx) => (
                <li key={idx}>{format(date, 'yyyy-MM-dd')}</li>
            ))}
        </ul>
    </div>
  )
}
