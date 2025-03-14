import React from 'react';
import '../styles/WorkHistory.css'

const WorkHistory = ({ enterprise, title, description, logo }) => {
    return (
        <div className="work-history-container">
            <div className="work-history-header">

                <div className='logo-container'>
                    <img
                        src={logo}
                        alt={`Logo de ${enterprise}`}
                        className='company-logo'
                    />
                </div>

                <div className="work-history-info">
                    <h2 className="company-name">{enterprise}</h2>
                    <p className="job-title">{title}</p>
                </div>
            </div>
            <p className="job-description">{description}</p>
        </div >
    );
};

export default WorkHistory;