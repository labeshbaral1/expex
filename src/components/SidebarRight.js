import React from "react";
import "./SidebarRight.css";
import { Link } from 'react-router-dom'
function SidebarRight() {
    return (
        <div class="sidebarRight">
            <div className="account">
                <div className="account-list">
                    <div className="title">Accounts</div>
                    <p className="account">
                        Account 1 : $100,000
                    </p>
                    <p className="account">
                        Account 2 : $200,000

                    </p>
                    <p className="account">
                        Account 3 : $300,000

                    </p>

                </div>

            </div>
            <div className="transactions">
            <div className="title">Transaactions</div>


            </div>
        </div>
    );
}

export default SidebarRight;