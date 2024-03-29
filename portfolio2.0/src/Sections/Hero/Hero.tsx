import { motion } from 'framer-motion'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import GitHubIcon from '../../icons/GitHubIcon.svg'
import LinkedInIcon from '../../icons/LinkedinIcon.svg'
import Blobs from '../../images/blobs.png'
import './Hero.css'

export default function Hero() {
    const springProps = {
        to: { opacity: 1, transform: 'translatey(-30%)' },
        from: { opacity: 0, transform: 'translatey(60%)' },
        delay: 1500,
        config: { mass: 1, tension: 280, friction: 60 },
    }

    const springProps2 = {
        to: [{ opacity: 1, transform: 'translatey(-30%)' }],
        from: { opacity: 0, transform: 'translatey(60%)' },
        delay: 500,
        config: { mass: 1, tension: 280, friction: 60 },
    }
    /* const blobSpring = useSpring({
    to: { opacity: 1, x: 50, y: 60 },
    from: { opacity: 0, x: 500, y: 500 },
    delay: 3500,
    config: { mass: 1, tension: 280, friction: 60 },
  }); */

    const secondSpring = useSpring(springProps)
    springProps.delay = 3000
    const thirdSpring = useSpring(springProps)
    const springy = useSpring(springProps2)

    return (
        <section className='hero-section'>
            <div className='main-box-inner'>
                <img src={Blobs} alt='' />
            </div>
            <div className='main-box-content'>
                <div className='upper-content'>
                    <animated.div style={springy}>
                        <h1>Hi!</h1>
                    </animated.div>
                    <animated.div style={secondSpring}>
                        <h1>Im Isak</h1>
                    </animated.div>
                </div>
                <div>
                    <animated.div style={thirdSpring}>
                        <h1>Welcome to my portfolio!</h1>
                    </animated.div>
                </div>
                <div>
                    <animated.div style={thirdSpring}>
                        <h4>
                            UI • UX • Machine Learning • Front end • Back end
                        </h4>
                    </animated.div>
                </div>
                <div className='hero-icons'>
                    <animated.div style={thirdSpring} className='hero-icons'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <a
                                rel='noreferrer'
                                target='_blank'
                                href='https://github.com/IsakLarsson'
                            >
                                <img
                                    src={GitHubIcon}
                                    alt='GitHub'
                                    style={{ margin: '0 0.5rem' }}
                                />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <a
                                rel='noreferrer'
                                target='_blank'
                                href='https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/'
                            >
                                <img
                                    src={LinkedInIcon}
                                    alt='LinkedIn'
                                    style={{ margin: '0 0.5rem' }}
                                />
                            </a>
                        </motion.div>
                    </animated.div>
                </div>
            </div>
        </section>
    )
}
