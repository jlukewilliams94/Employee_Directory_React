import React from "react";

function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo center">Employee Directory</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                </ul>
            </div>
        </nav>
      );
}

export default Header;