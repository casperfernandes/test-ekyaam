import React from 'react';
import ActionButtons from './ActionButtons';

const MobileFooter = () => {
    return (
        <footer>
            <div className="mobile-action">
                <ActionButtons />
            </div>

            <div className="footer-inner">
                <div className="footer-item selected">
                    <img src="/assets/images/dashboardIcon.svg" alt="" />
                </div>

                <div className="footer-item">
                    <img src="/assets/images/communicationIcon.svg" alt="" />
                </div>

                <div className="footer-item">
                    <img src="/assets/images/textBubbleIcon.svg" alt="" />

                    <span className="count">1</span>
                </div>

                <div className="footer-item">
                    <img src="/assets/images/bellIcon.svg" alt="" />

                    <span className="count">12</span>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;

