import React from 'react'
import '../styles/skills.css'
import Skill_chip from './skill_chip'

function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <Skill_chip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
        </section>
    )
}

export default Skills
