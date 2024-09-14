import React from 'react'
import './PasswordHistory.css'

function PasswordHistory({ pHistory }) {
    let passwordContent
    if (pHistory.length === 0) {
        passwordContent = <li>No passwords generated yet.</li>;
    } else {
        passwordContent = pHistory.map((password, index) => (
            <li key={index}>{password}</li>
        ));
    }
    return (
        <>
            <div className="passwordHistoryContainer">
                <div className="historyBox">
                    <span className='historyTitle'>History</span>
                    <ul>
                        {passwordContent}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PasswordHistory
