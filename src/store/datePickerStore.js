import { create } from "zustand";
import { addDays , addWeeks , addMonths , addYears, interval } from "date-fns";

const useDatePickerStore = create((set) => ({
    startDate: new Date(),
    endDate: null,
    recurrence: 'daily',
    interval: 1,
    daysOfWeek: [],
    nthDayOfMonth: null,
    selectedDates: [],

    setStartDate: (date) => set({startDate: date}),
    setEndDate: (date) => set({endDate: date}),
    setRecurrence: (recurrence) => set({recurrence}),
    setInterval: (interval) => set({interval}),
    setDaysOfWeek: (days) => set({daysOfWeek: days}),
    setNthDayOfMonth: (nthDay) => set({nthDayOfMonth: nthDay}),

    generateRecurringDates : () => {
        set((state) => {
            const dates = [];
            let currentDate = state.startDate;


            while(!state.endDate || currentDate <= state.endDate) {
                dates.push(currentDate);

                switch (state.recurrence) {
                    case 'daily':
                        currentDate = addDays(currentDate, state.interval);
                        break;
                    
                    case 'weekly':
                        currentDate = addWeeks(currentDate, state.interval);
                        break;
                    
                    case 'monthly':
                        currentDate = addMonths(currentDate, state.interval);
                        break;

                    case 'yearly':
                        currentDate = addYears(currentDate, state.interval);
                        break;
                }
            }

            return { selectedDates: dates};
        })
    }
}))

export default useDatePickerStore;