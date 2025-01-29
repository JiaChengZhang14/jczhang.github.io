import React from 'react'
import '../styles/skills.css'
import SkillChip from './skill_chip'

function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className='box-indent'>
                <h3>Android Development</h3>
                <div className="chip-box">
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                    <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Android' />
                </div>
            </div>
        </section>
    )
}

export default Skills
