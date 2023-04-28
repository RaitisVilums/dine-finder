import "./calendar.styles.scss";
import { useState } from "react";

import Button from "../Button/button";
const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };
  const daysInMonth = getDaysInMonth();
  const startDay = daysInMonth[0].getDay();

  const gridCells = Array.from({ length: 7 * 6 }, (_, index) => {
    const dayIndex = index - startDay + 1;
    return dayIndex >= 0 && dayIndex < daysInMonth.length
      ? daysInMonth[dayIndex]
      : null;
  });

  const handleDateClick = (day) => {
    if (day !== null) {
      setSelectedDate(day);
      const formattedDate = day.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const event = {
        target: {
          name: "date",
          value: formattedDate,
        },
      };
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <Button onClick={prevMonth}>{"<"}</Button>
        <h1>
          {MONTHS[date.getMonth()]} {date.getFullYear()}
        </h1>
        <Button onClick={nextMonth}>{">"}</Button>
      </div>
      <div className="calendar__weekdays">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar__days">
        {gridCells.map((day, index) => (
          <div
            key={index}
            className={`calendar__day ${
              day &&
              selectedDate &&
              day.toDateString() === selectedDate.toDateString()
                ? "calendar__day--selected"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
