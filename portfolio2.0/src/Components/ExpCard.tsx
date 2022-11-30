import React from 'react'
import '../Sections/Experience/Experience.css'
import { motion } from 'framer-motion'

interface ExpCardProps {
    position: string
    company: string
    image: string
    period: string
}

export const ExpCard: React.FC<ExpCardProps> = ({
    position,
    company,
    image,
    period,
}) => {
    return (
        <motion.div
            whileHover={{ x: 20 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            className='exp-card flex-row'
        >
            <div className='exp-img flex-row-center'>
                <img src={image} alt='logo' />
            </div>
            <div className='exp-content flex-row-space-between'>
                <div className='exp-info'>
                    <h3>{position}</h3>
                    <p>{company}</p>
                </div>
                <div className='exp-dates'>
                    <p>{period}</p>
                </div>
            </div>
        </motion.div>
    )
}
