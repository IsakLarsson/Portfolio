import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
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
                duration: 1,
            }}
        >
            {children}
        </motion.div>
    )
}
