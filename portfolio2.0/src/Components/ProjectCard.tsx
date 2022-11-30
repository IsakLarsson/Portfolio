import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Sections/Projects/Projects.css'
import { ProjectInterface } from './ProjectList' //creates dependency but it doesnt matter here

export const ProjectCard: React.FC<ProjectInterface> = ({
    title,
    description,
    image,
    tools,
    code,
}) => {
    return (
        <motion.div whileHover={{ y: 5 }} className='card'>
            <div className='card-image'>
                <img src={image} alt='Card' />
            </div>
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='bottom-div'>
                    <Link to='#' className='hvr-underline-from-left'>
                        Read more
                    </Link>
                    {code ? (
                        <a
                            href={code}
                            rel='noreferrer'
                            target='_blank'
                            className='hvr-underline-from-left'
                        >
                            View code
                        </a>
                    ) : (
                        <></>
                    )}

                    <div className='tools'>
                        {tools.map((tool, index) => (
                            <img src={tool} alt='.' key={`tool:${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
