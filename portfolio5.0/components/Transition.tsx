import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode
}
export const Transition: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
                type: 'spring',
                duration: 1,
            }}
        >
            {children}
        </motion.div>
    )
}
