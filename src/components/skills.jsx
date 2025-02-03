import React from 'react'
import '../styles/skills.css'
import SkillChip from './skill_chip'

function Skills() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className='skills-box'>
                <div className='skills-box__skill-card'>
                    <h3>Android Development</h3>
                    <div className="chip-box">
                        <SkillChip image='/icons/kotlin-svgrepo-com.svg' text='Kotlin' />
                        <SkillChip image='/icons/java-svgrepo-com.svg' text='Java' />
                        <SkillChip image='\icons\gradle-svgrepo-com.svg' text='Gradle' />
                        <SkillChip image='\icons\firebase-svgrepo-com.svg' text='Firebase' />
                    </div>
                </div>
                <div className='skills-box__skill-card'>
                    <h3>Web Development</h3>
                    <div className="chip-box">
                        <SkillChip image='\icons\html-5-svgrepo-com.svg' text='HTML' />
                        <SkillChip image='\icons\css3-svgrepo-com.svg' text='CSS' />
                        <SkillChip image='\icons\javascript-svgrepo-com.svg' text='JavaScript' />
                        <SkillChip image='\icons\react-svgrepo-com.svg' text='React.js' />
                    </div>
                </div>
                <div className='skills-box__skill-card'>
                    <h3>Tools</h3>
                    <div className="chip-box">
                        <SkillChip image='\icons\git-svgrepo-com.svg' text='Git' />
                        <SkillChip image='\icons\github-icon-svgrepo-com.svg' text='Github' />
                        <SkillChip image='\icons\trello-svgrepo-com.svg' text='Trello' />
                        <SkillChip image='\icons\jira-svgrepo-com.svg' text='Jira' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
