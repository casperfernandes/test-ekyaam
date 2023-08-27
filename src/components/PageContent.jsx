import React from 'react';

import BookingsCalendar from './BookingsCalendar';
import ActionButtons from './ActionButtons';
import MobileFooter from './MobileFooter';
import Stats from './Stats';

const PageContent = () => {
    return (
        <main>
            <div className="top-content">
                <div>
                    <span>
                        Good morning,
                    </span>

                    <b> Dr. Ramesh Thakur</b>
                </div>

                <div className="d-none top-buttons">
                    <ActionButtons />
                </div>
            </div>

            <Stats />

            <BookingsCalendar />

            <div className="d-lg-none">

                <MobileFooter />
            </div>
        </main>
    );
};

export default PageContent;
