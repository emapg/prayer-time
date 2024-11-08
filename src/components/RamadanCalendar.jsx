import React from 'react';

const RamadanCalendar = () => {
  const daysInRamadan = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Ramadan Calendar</h2>
      <div className="grid grid-cols-7 gap-4 mt-4">
        {daysInRamadan.map(day => (
          <div key={day} className="border border-gray-300 p-4 text-center rounded-lg hover:bg-blue-100 transition duration-200">
            <span className="text-lg font-semibold">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamadanCalendar;