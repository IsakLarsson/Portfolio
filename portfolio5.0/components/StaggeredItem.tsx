import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import React, { ReactNode } from 'react'

const listVariant = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
}
type Props = { children: ReactNode }

export const StaggeredItem = ({ children }: Props) => {
    return (
        <motion.div
            variants={listVariant}
            key={nanoid()}
            transition={{
                type: 'spring',
                duration: 0.8,
            }}
        >
            {children}
        </motion.div>
    )
}
