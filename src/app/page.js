"use client"

import { DatePicker } from "@/components/DatePicker";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <Head>
        <title>Next.js Date Picker</title>
      </Head>
      <DatePicker />
    </div>
  );
}



/* 

    datePickerStore 
     return currentDate;

      Component:
        DatePicker
          DateInput(startDate , endDate)
          RecurrenceOpretion(pattern->daily , weekly , monthly , yearly)
          Toggle button used to generate preview of dates and conditional redendering of DatePreview if toggle "ture"


      page 
        Head ->Next.js
        DatePreview


*/
