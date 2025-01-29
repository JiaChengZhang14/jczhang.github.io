import React from 'react';
import '../styles/skill_chip.css';

function Skill_chip({ image, text }) {
    return (
        <div className="skill-chip">
            <img src={image} alt={text} className="skill-chip-image" />
            <span className="skill-chip-text">{text}</span>
        </div>
    );
}

export default Skill_chip;
