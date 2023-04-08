import { useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../Css/custom-calendar.css'

export const CustomCalendar = ({activeStartDate, selectRange, dateRange, setDateRange, visibility, setVisibility}) => {

  const [isMobile, setMobile] = useState(false);

  const onChange = e => {
    if (!dateRange.selecting) {
      setDateRange({...dateRange, dateStart: e.toISOString().substring(0,10), selecting: true})
      return;
    }
    if (!(e.getTime() < new Date(dateRange.dateStart.split('-')[0], dateRange.dateStart.split('-')[1] - 1, dateRange.dateStart.split('-')[2]).getTime())) {
      setDateRange({...dateRange, dateEnd: e.toISOString().substring(0,10), selecting: false})
    } else e.preventDefault()
    // console.log(e, new Date(dateRange.dateStart.split('-')[0], dateRange.dateStart.split('-')[1] - 1, dateRange.dateStart.split('-')[2]));
  }

  const closeCalendar = e => {
    e.preventDefault();
    setVisibility(false);
  }

  return (<div className={`calendar ${isMobile && 'one-calendar'} ${visibility && 'visible'}`}>
    <Calendar className={'desktop'}  minDate={new Date()} selectRange={selectRange} onClickDay={onChange} showDoubleView={true} showNeighboringMonth={false} formatShortWeekday={(locale, date) => date.toLocaleDateString('es', {weekday : 'narrow'})}/>
    <Calendar className={'mobile one-calendar'}  minDate={new Date()} selectRange={selectRange} onClickDay={onChange} showDoubleView={false} showNeighboringMonth={false} formatShortWeekday={(locale, date) => date.toLocaleDateString('es', {weekday : 'narrow'})}/>
    <div className="applyContainer"><button onClick={closeCalendar} className="apply">Aplicar</button></div>
    
  </div>)
}