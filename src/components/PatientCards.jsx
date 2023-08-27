import React from 'react';

import Button from './Button';

const PatientCards = () => {
    return (
        <div className="patient-card">
            <div className="d-lg-none">
                <div className="patient-top">
                    <div>
                        <div className="start-time">11:00 AM</div>

                        <div className="end-time">12:00 PM</div>
                    </div>

                    <div className="divider" />

                    <div>
                        <div className="patient-name">Kiran Rathi</div>

                        <div className="previous-session">
                            Previous session:

                            <br />

                            Tuesday, March 5, 2023
                        </div>
                    </div>
                </div>

                <div className="others">
                    <span>
                        Other
                        <br />
                        Participants
                    </span>

                    <div className="photo-holder">
                        <img src="/assets/images/user1.png" alt="" />

                        <img src="/assets/images/user2.png" alt="" />

                        <img src="/assets/images/user1.png" alt="" />
                    </div>

                    <button>Start Session</button>
                </div>
            </div>

            <div className="desktop-patient-card">
                <div className="patient-details">
                    <img src="/assets/images/user2.png" alt="" />

                    <div>
                        <div className="fs-16 bold">Kiran Rathi</div>

                        <div>
                            <img src="/assets/images/phoneIcon.svg" alt="" />

                            <span className="fs-14 semi-bold">+91 98765 43210</span>
                        </div>

                        <div>
                            <img src="/assets/images/emailIcon.svg" alt="" />

                            <span className="fs-14 semi-bold">kiranrathi@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-12">
                        <b>Time Slot: </b>

                        <span className="semi-bold">11:00am – 12:00pm</span>
                    </div>

                    <div className="mb-12">
                        <b>Session Type: </b>

                        <span className="semi-bold">Online/ In-person</span>
                    </div>

                    <div className="mb-12">
                        <b>Date: </b>

                        <span className="semi-bold">Tuesday, March 5,2023</span>
                    </div>

                    <div>
                        <b>Previous Session: </b>

                        <span className="semi-bold">Tuesday, March 5 2023</span>
                    </div>
                </div>

                <div className="session-buttons">
                    <Button isPrimary>Start Session</Button>

                    <Button isPrimary>Reschedule Session</Button>
                </div>
            </div>

            <img className="d-none patient-card-caret" src="/assets/images/caretIcon.svg" alt="" />
        </div>
    );
};

export default PatientCards;
