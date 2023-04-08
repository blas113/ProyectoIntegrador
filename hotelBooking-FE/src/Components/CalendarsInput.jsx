import {useState} from 'react'
import '../css/calendars-input.css'
import { Calendar } from './Calendar';
import { CustomCalendar } from './CustomCalendar';

export const CalendarsInput = ({dateRange, setDateRange}) => {
    // console.log([arrivalDate, departureDate])

    const [calendarsVisible, setCalendarsVisible] = useState(false);


    const labelDates = date => {
        return date.split('-').reverse().join('-')
    }

    const deInstanceDates = e => {
        e.preventDefault();
        setDateRange({
            dateStart: '',
            dateEnd: '',
            selecting: false
        })
    }

    return <div className='calendarsInput'>
        <button className="saca-filtro" onClick={deInstanceDates}><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.461 8.88052C52.4913 6.85023 52.4913 3.55302 50.461 1.52272C48.4307 -0.507575 45.1335 -0.507575 43.1032 1.52272L26 18.6422L8.88052 1.53897C6.85023 -0.491332 3.55302 -0.491332 1.52272 1.53897C-0.507575 3.56926 -0.507575 6.86647 1.52272 8.89677L18.6422 26L1.53897 43.1195C-0.491332 45.1498 -0.491332 48.447 1.53897 50.4773C3.56926 52.5076 6.86647 52.5076 8.89677 50.4773L26 33.3578L43.1195 50.461C45.1498 52.4913 48.447 52.4913 50.4773 50.461C52.5076 48.4307 52.5076 45.1335 50.4773 43.1032L33.3578 26L50.461 8.88052Z" fill="#DFE4EA"/>
</svg></button>
        <button className="dateButton" onClick={(e) => {e.preventDefault(); setCalendarsVisible(true)}}>{dateRange.dateStart ? labelDates(dateRange.dateStart) : '-/-/--'}</button>
        <button className="dateButton" onClick={(e) => {e.preventDefault(); setCalendarsVisible(true)}}>{dateRange.dateEnd ? labelDates(dateRange.dateEnd) : '-/-/--'}</button>
        <CustomCalendar activeStartDate={new Date()} selectRange={true} dateRange={dateRange} setDateRange={setDateRange} visibility={calendarsVisible} setVisibility={setCalendarsVisible}/>
    </div>
}