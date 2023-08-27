import React, { Fragment } from 'react';

const TotalStats = [
    { id: 1, image: '/assets/images/pendingTasksIcon.svg', title: 'Pending Tasks', count: 5 },
    { id: 2, image: '/assets/images/prescriptionIcon.svg', title: 'Prescriptions Due', count: 16 },
    { id: 3, image: '/assets/images/patientIcon.svg', title: 'Inactive Patients', count: 80 },
    { id: 4, image: '/assets/images/recordsIcon.svg', title: 'Update Records', count: 190 },
    { id: 5, image: '/assets/images/brainHeadIcon.svg', title: 'Therapists', count: 15 },
];

const Stats = () => {
    return (
        <div className="stats-parent">
            {TotalStats.map(item => {
                const { id, image, title, count } = item;

                return (
                    <Fragment key={id}>
                        <div className="mobile-stat-card">
                            <img src={image} alt="" />

                            <span>{count}</span>

                            <div>{title}</div>
                        </div>

                        <div className="desktop-stat-card">
                            <img src={image} alt="" />

                            <div>
                                <span>{title}</span>

                                <div>{count}</div>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Stats;
