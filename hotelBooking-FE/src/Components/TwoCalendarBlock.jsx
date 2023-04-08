import { useEffect, useState } from "react"
import Calendar from 'react-calendar'
import { isWithinRanges } from '../utils/dateRanges'

import '../css/two-calendars.css'

export const TwoCalendarBlock = ({url_base, product_id, viewOnly, dateRange, setDateRange}) => {

  const [disabledDates, setDisabledDates] = useState([]);

  const onChange = e => {
    if (!dateRange.selecting) {
      setDateRange({...dateRange, dateStart: e.toISOString().substring(0,10), selecting: true})
      return;
    }
    else if (!(e.getTime() < new Date(dateRange.dateStart.split('-')[0], dateRange.dateStart.split('-')[1] - 1, dateRange.dateStart.split('-')[2]).getTime())) {
      setDateRange({...dateRange, dateEnd: e.toISOString().substring(0,10), selecting: false})
    } else {
      console.log(e);
      e.preventDefault()
    }
    
  }

  useEffect(() => {
    fetch(`${url_base}/reservas/producto/${product_id}`)
    .then(res => res.json())
    .then(data => {
      setDisabledDates(data.map(booking => ([
        new Date(`${booking.checkIn}T00:00:00`),
        new Date(`${booking.checkOut}T00:00:00`)
      ])))
    })
  }, [])
  
  function disabledDatesFunc({date, view}) {
    if (view === 'month') {
      return isWithinRanges(date, disabledDates);
    }
  }

  return <div className="calendar relative visible">
    <Calendar className={`desktop ${viewOnly && 'view-only'}`} selectRange={true} tileDisabled={disabledDatesFunc} onClickDay={onChange} minDate={new Date()} showDoubleView={true} showNeighboringMonth={false} formatShortWeekday={(locale, date) => date.toLocaleDateString('es', {weekday : 'narrow'})}/>
    <Calendar className={`mobile one-calendar ${viewOnly && 'view-only'}`} selectRange={true}  tileDisabled={disabledDatesFunc} onClickDay={onChange} minDate={new Date()} showDoubleView={false} showNeighboringMonth={false} formatShortWeekday={(locale, date) => date.toLocaleDateString('es', {weekday : 'narrow'})}/>
  </div>
}