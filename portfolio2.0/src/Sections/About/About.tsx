import React from 'react'
import './About.css'
import Selfie from '../../images/Selfie.png'
import { tools } from './Tools'

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
    return (
        <section className='about-section'>
            <div className='about-container'>
                <div className='selfie'>
                    <img src={Selfie} alt='me irl' />
                </div>
                <div className='about-content'>
                    <h2 style={{ marginBottom: 0 }}>About me</h2>
                    <p>
                        I am currently working as a software development
                        consultant at Netlight, Stockholm, Sweden. My main
                        interests are both front-end and back-end development as
                        well as AI and UI and UX-design. On top of that I'm also
                        an avid guitar player, music lover and painting
                        beginner. I'm always striving to develop my skill set as
                        much as possible. My passion lies in technology,
                        creativity, problem-solving and my drive comes from
                        wanting to build the future. Whether that’s via design,
                        development or both, I want to be a part of it.
                    </p>
                    <h3 style={{ marginTop: '3rem' }}>Technologies</h3>
                    <div className='tools-container'>
                        {tools.map((tool, index) => (
                            <div className='tool' key={`tool:${index}`}>
                                <img src={tool.icon} alt='icon missing' />
                                <p>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
