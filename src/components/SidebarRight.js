import React from "react";
import "./SidebarRight.css";
import { Link } from 'react-router-dom'
function SidebarRight() {
    return (
        <div class="sidebarRight">
            <div class="sidebarRight-icons">
                <div className="account-examples">
                    <div className="acc">
                        Accounts
                    </div>
                    <div className="account-list">
                        <div>
                            HSBC Account: 1482
                        </div>
                        <div>
                            Chase Account: 9214
                        </div>
                        <div>
                            DCU Account: 2341
                        </div>
                        <div>
                            CapCom Account: 2312
                        </div>
                    </div>
                </div>
                <div className="trans">Transactions</div>
            </div>
        </div>
    );
}

export default SidebarRight;