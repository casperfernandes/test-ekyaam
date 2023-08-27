import React from 'react';

import PatientCards from './PatientCards';
import Calendar from './Calendar';

const BookingsCalendar = () => {
    return (
        <div className="booking-calendar">
            <div className="d-lg-none">
                <div className="mobile-header">
                    <div>
                        <img src="/assets/images/dottedClockIcon.svg" alt="" />

                        <span>Scheduled Sessions</span>
                    </div>

                    <button>
                        + Add Session
                    </button>
                </div>

                <div className="mobile-dates">
                    <div className="fs-13 bold">23 March 2023</div>

                    <div className="fs-12 semi-bold">
                        Today | Weekly | Monthly
                    </div>
                </div>
            </div>

            <div className="desktop-date">
                <div>
                    <div className="semi-bold">Thursday</div>

                    <span className="fs-24 bold">19 March 2023</span>

                    <span className="grey-label">Today</span>
                </div>

                <div className="session-cards">
                    <div className="card total">
                        <img src="/assets/images/communicationIcon.svg" alt="" />

                        <span className="fs-24 bold">23&nbsp;</span>

                        <div>Total Sessions</div>
                    </div>

                    <div className="card">
                        <img src="/assets/images/communicationIcon.svg" alt="" />

                        <span className="fs-24 bold">23&nbsp;</span>

                        <div> Completed Sessions</div>
                    </div>
                </div>
            </div>

            <Calendar />

            <PatientCards />
        </div>
    );
};

export default BookingsCalendar;
