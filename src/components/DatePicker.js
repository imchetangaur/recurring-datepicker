import { useState } from "react"
import useDatePickerStore from "@/store/datePickerStore"
import { RecurrenceOptions } from "./RecurrenceOptions"
import { DateInput } from "./DateInput"
import { DatePreview } from "./DatePreview"


import React from 'react'



export const DatePicker = () => {
    const {
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        recurrence,
        setRecurrence,
        interval,
        setInterval,
        generateRecurringDates,
        selectedDates,
    } = useDatePickerStore();

    const [isPreviewVisible , setPreviewVisible] = useState(false);

    const handleGenerateDates = () => {
        generateRecurringDates();
        setPreviewVisible(true);
    }


    return (
        
        <div className="p-6 max-w-lg mx-auto bg-gray-500 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold mb-4">Recurring Date Picker</h2>

            <DateInput
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />

            <RecurrenceOptions 
                recurrence={recurrence}
                setRecurrence={setRecurrence}
                interval={interval}
                setInterval={setInterval}
            />

            <button
                onClick={handleGenerateDates}
                className="bg-blue-500 text-white rounded px-4 py-2"
            >
                Generate Recurring Dates
            </button>


            {isPreviewVisible && <DatePreview selectedDates={selectedDates} />}
        </div>
    );
}
