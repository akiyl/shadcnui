// Calendar.tsx
"use client";
import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(
      (prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      (prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1)
    );
  };

  return (
    <div className="text-center mt-8 bg-black">
      <div className="mb-4">
        <button
          onClick={prevMonth}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Prev Month
        </button>
        <span className="mx-4 text-xl">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          onClick={nextMonth}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Next Month
        </button>
      </div>

      <Transition in timeout={300}>
        {(state) => (
          <div className={`calendar ${state}`}>
            <Calendar value={currentMonth} />
          </div>
        )}
      </Transition>

      <style jsx>{`
        .calendar {
          transition: opacity 300ms ease-in-out;
          opacity: 1;
        }

        .calendar-exit {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default CustomCalendar;
