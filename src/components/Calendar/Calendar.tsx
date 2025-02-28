import { useState } from "react";
import "./Calendar.scss";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Funktioner för att kunna byta månad
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Funktion för att hämta månad och år
  const getMonthYear = () => {
    return currentDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

  // Hämta första dagen i månaden och antal dagar
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // array med alla veckodagar
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Dagar i månaden
  const daysArray = [];
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(""); 
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <div className="card calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h1>{getMonthYear()}</h1>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            {weekDays.map((day, index) => (
              <th key={index} className={index === 0 ? "sunday" : ""}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(daysArray.length / 7) }, (_, week) => (
            <tr key={week}>
              {daysArray.slice(week * 7, week * 7 + 7).map((day, index) => (
                <td key={index} className={index === 0 && day !== "" ? "sunday" : ""}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
