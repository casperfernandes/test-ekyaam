import React from "react";

import Search from "./Search";

const Header = () => {
    return (
        <nav>
            <div className="header-mobile">
                <div>
                    <img src="/assets/images/navbarHamburgerIcon.svg" alt="" />
                </div>

                <div>
                    <img className="logo-img" src="/assets/images/logo.png" alt="" />
                </div>

                <div>
                    <img className="search-img" src="/assets/images/largeMagnifyingGlass.svg" alt="" />

                    <img className="user-img" src="/assets/images/user1.png" alt="" />
                </div>
            </div>

            <div className="header-desktop">
                <img className="logo-img" src="/assets/images/logo.png" alt="" />

                <div className="right-section">
                    <div className="">
                        <Search placeholder="Search therapist or patient" />
                    </div>

                    <div className="notification">
                        <img src="/assets/images/bellIcon.svg" alt="" />

                        <span className="count">12</span>
                    </div>

                    <div>
                        <img className="user-img" src="/assets/images/user1.png" alt="" />

                        <img src="/assets/images/caretIcon.svg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
