import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
    children: ReactNode
}
export const Transition: React.FC<Props> = ({ children }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 50,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
