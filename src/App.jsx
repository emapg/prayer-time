import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrayerTimes from './components/PrayerTimes';
import RamadanCalendar from './components/RamadanCalendar';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="my-8">
        <RamadanCalendar />
        <PrayerTimes />
      </main>
      <Footer />
    </div>
  );
};

export default App;