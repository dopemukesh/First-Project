/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useState, useRef, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameDay,
  setYear,
  isSameMonth,
} from "date-fns";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const calendarRef = useRef(null);

  // ✅ Detect Outside Click and Close Calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
        setShowYearDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateClick = (date) => {
    if (!isSameMonth(date, currentMonth)) {
      setCurrentMonth(startOfMonth(date));
      setSelectedDate(date);
    } else {
      setSelectedDate(date);
      setShowCalendar(false);
    }
  };

  const handleYearClick = () => {
    setShowYearDropdown(!showYearDropdown);
  };

  const handleYearChange = (year) => {
    setCurrentMonth(setYear(currentMonth, year));
    setShowYearDropdown(false);
  };

  const renderDays = () => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);

    let date = startDate;
    let days = [];

    while (date <= endDate) {
      const currentDate = new Date(date);
      const isCurrentMonth = isSameMonth(currentDate, currentMonth);

      days.push(
        <button
          key={currentDate.toISOString()}
          className={`p-2 text-center w-10 h-10 rounded-2xl transition-all ${
            isSameDay(currentDate, selectedDate)
              ? "bg-teal-500 text-gray-800"
              : isCurrentMonth
              ? "hover:bg-gray-200 dark:hover:bg-gray-700"
              : "opacity-40 hover:opacity-80"
          }`}
          onClick={() => handleDateClick(currentDate)}
        >
          {format(currentDate, "d")}
        </button>
      );
      date = addDays(date, 1);
    }

    return days;
  };

  const currentYear = new Date().getFullYear();
  const futureYears = Array.from({ length: 6 }, (_, i) => currentYear + i);

  return (
    <div className="relative w-full" ref={calendarRef}>
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500"
      >
        {format(selectedDate, "dd-MM-yyyy")}
      </button>

      {showCalendar && (
        <div className="absolute mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          {/* Month & Year Selector */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className=" w-8 h-8 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              &lt;
            </button>
            <span className="font-semibold flex gap-2">
              {format(currentMonth, "MMMM")}{" "}
              <button
                className="text-teal-600 dark:text-teal-500"
                onClick={handleYearClick}
              >
                {format(currentMonth, "yyyy")}
              </button>
            </span>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className=" w-8 h-8 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              &gt;
            </button>
          </div>

          {/* Year Dropdown */}
          {showYearDropdown && (
            <div className="absolute bg-white dark:bg-gray-700 shadow-lg rounded-lg p-2 max-h-40 overflow-y-auto">
              {futureYears.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`block w-full text-center px-3 py-1 hover:bg-teal-500 hover:text-white ${
                    year === currentMonth.getFullYear()
                      ? "bg-teal-500 text-white"
                      : ""
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          {/* Days Grid */}
          <div className="grid grid-cols-7 text-center text-gray-600 dark:text-gray-300">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          <div className="grid grid-cols-7 gap-1 mt-2 text-center">
            {renderDays()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
