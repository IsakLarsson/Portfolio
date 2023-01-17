import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const boxVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            // when: 'beforeChildren', //use this instead of delay
            staggerChildren: 0.08,
        },
    },
}
type Props = { children: ReactNode }

export const StaggerWrapper = ({ children }: Props) => {
    return (
        <motion.div
            className="box"
            variants={boxVariant}
            animate="visible"
            initial="hidden"
        >
            {children}
        </motion.div>
    )
}
