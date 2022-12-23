import React from "react";
import "./SidebarRight.css";
import { Link  } from 'react-router-dom'
function SidebarRight() {
	return (
    <div class="sidebarRight">
        <div class="sidebarRight-icons">
            <div className="account-examples">
                <div className="acc">
                Accounts
                </div>
                <div>
                HSBC Account: 1482
                </div>
                <div>
                HSBC Account: 1482
                </div>
            </div>
            <div className="trans">Transactions</div>
        </div>
    </div>
	);
}

export default SidebarRight;