import React from "react";
import dp from './stuti.jpg';

export default function Head() {
    return (
        <div className="head">
            <img src={dp} className="profile" />
            <h1 className="name">Stuti Surana</h1>
            <h2 className="role">Buisness woman</h2>
            <h3 className="website">@moicious_</h3>
            <div className="buttons">
                <a href="mailto: stutisuranais@gmail.com?Subject=subject message" target="_blank" className="email-btn head-btn"><i className="fa fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/stuti-surana-076991242/" className="linkedin-btn head-btn" target="blank_"><i className="fa fa-linkedin-square"></i> LinkedIn</a>
            </div>
        </div>
    )
};