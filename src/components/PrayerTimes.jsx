import React, { useEffect, useState } from 'react';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true);
      const response = await fetch('http://api.aladhan.com/v1/timingsByCity?city=YOUR_CITY&country=YOUR_COUNTRY');
      const data = await response.json();
      setPrayerTimes(data.data.timings);
      setLoading(false);
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Prayer Times</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-4">
          {Object.entries(prayerTimes).map(([prayer, time]) => (
            <li key={prayer} className="my-2 border-b py-2 flex justify-between">
              <span className="font-semibold">{prayer}:</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrayerTimes;