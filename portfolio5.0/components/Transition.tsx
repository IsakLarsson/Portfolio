import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import React, { ReactNode } from 'react'
import { StaggerWrapper } from './StaggerWrapper'
interface Props {
    children: ReactNode
}
export const Transition: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
                type: 'spring',
                duration: 0.8,
            }}
            key={nanoid()}
        >
            <StaggerWrapper>{children}</StaggerWrapper>
        </motion.div>
    )
}
