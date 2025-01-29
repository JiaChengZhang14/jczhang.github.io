import React from 'react';
import '../styles/skill_chip.css';

function SkillChip({ image, text }) {
    return (
        <div className="skill-chip">
            <img src={image} alt={text} className="skill-chip-image" />
            <span className="skill-chip-text">{text}</span>
        </div>
    );
}

export default SkillChip;
