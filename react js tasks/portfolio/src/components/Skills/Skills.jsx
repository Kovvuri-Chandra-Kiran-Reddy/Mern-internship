import React from 'react'
import './Skills.css'
import SkillsData from './SkillsData'

const Skills = () => {
    return (
        <>
            <section className="skills-section">
                <div className="cc">
                    <div className="section-title center">
                        <h2>My Skills</h2>
                    </div>

                    <div className="skill-items">
                        {SkillsData.map((skill) => {
                            return (<div className="skill-item">
                                <div className="skill-info">
                                    <p>{skill.name}</p>
                                    <p>{skill.perc}</p>
                                </div>
                                <div className="progress-line" data-percent="90%">
                                    <span style={{ width: skill.perc }}></span>
                                </div>
                            </div>)
                        })}

                    </div>
                </div>

            </section>
        </>
    )
}

export default Skills
