import React from 'react';

const Days = [
    { day: 'Mon', date: 19 },
    { day: 'Tue', date: 20 },
    { day: 'Wed', date: 21 },
    { day: 'Thu', date: 22 },
    { day: 'Fri', date: 23, isSelected: true },
    { day: 'Sat', date: 24 },
    { day: 'Sun', date: 25 },
    { day: 'Sun', date: 26 },
    { day: 'Sun', date: 27 },
    { day: 'Sun', date: 28 }
];

const Calendar = () => {
    return (
        <div className="calendar">
            <img className="previous" src="/assets/images/caretIcon.svg" alt="" />

            <div className="days-parent">
                {Days.map(item => {
                    const { day, date, isSelected } = item;

                    return (
                        <div key={date} className={`day ${isSelected ? 'selected' : ''}`}>
                            <div className="weekday">{day}</div>

                            <div className="date">{date}</div>
                        </div>
                    );
                })}
            </div>

            <img className="next" src="/assets/images/caretIcon.svg" alt="" />
        </div>
    );
};

export default Calendar;
