import React from 'react'
import Hero from '../Sections/Hero/Hero'
import { About } from '../Sections/About/About'
import { Projects } from '../Sections/Projects/Projects'
import Waves from '../images/Waves.png'
import { Experience } from './../Sections/Experience/Experience'
import { Header } from './../Components/Header'

export default function Home() {
    return (
        <>
            <Header />
            <main className='main-box'>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        marginTop: '3rem',
                        position: 'absolute',
                    }}
                >
                    <h4 style={{ maxWidth: '80%' }}>
                        If you like anything you see here, please contact me on{' '}
                        <a
                            href='https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/'
                            target='_blank,'
                            style={{
                                marginTop: '-3px',
                                color: '#ADD8E6',
                                fontWeight: '600',
                            }}
                            className='hvr-underline-from-left'
                        >
                            LinkedIn!
                        </a>
                    </h4>
                </div>
            </main>
            <img
                style={{ width: '100%', marginBottom: '-6px' }} //weird margin-bottom fix
                src={Waves}
                alt='Waves'
                className='waves'
            />
        </>
    )
}
