import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../../node_modules/react-calendar/dist/Calendar.css';
// import styles from './Calendar.module.css'


function AppCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='w-96'>
      <div className=''>
        <Calendar
          onChange={setDate} 
          value={date} 
          className="border py-6 rounded-xl"
        />
      </div>
      <p className='text-center text-teal-900 mt-2 font-bold text-sm'>
        <span className=' text-teal-900'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default AppCalendar;