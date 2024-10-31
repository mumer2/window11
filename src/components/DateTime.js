// components/DateTime.js
"use client";
import { useEffect, useState } from 'react';

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format date as "Day, Month DD" (e.g., "Mon, Oct 30")
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  // Format time as "HH:mm" (24-hour format)
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex flex-col items-center text-sm-12 mr-2 text-gray-900">
      <div>{formattedTime}</div>
      <div>{formattedDate}</div>
    </div>
  );
};

export default DateTime;
