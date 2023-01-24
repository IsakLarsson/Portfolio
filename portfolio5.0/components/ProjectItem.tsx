import { Image, GridItem, Heading, Text, Box } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { StaggeredItem } from './StaggeredItem'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import { closeSpring, openSpring } from './animations/animations'

interface Props {
    title: string
    text?: string
    image: string
    index: number
}
export const ProjectItem: React.FC<Props> = ({ title, text, image, index }) => {
    const [isSelected, setSelected] = useState<boolean>(false)
    const handleClick = (index: number): void => {
        console.log(index)
        setSelected(!isSelected)
    }
    const isOpen = () => {
        return isSelected ? 'open' : ''
    }
    return (
        <GridItem>
            <li
                onClick={() => {
                    handleClick(index)
                }}
                className="card"
            >
                <div className={`card-content-container ${isOpen()}`}>
                    <motion.div
                        layout
                        whileHover={{ x: 4 }}
                        transition={isSelected ? openSpring : closeSpring}
                        className="card-content"
                    >
                        <motion.div layout>
                            <Image
                                className="card-image-container"
                                boxSize={'md'}
                                borderRadius={'0.5rem'}
                                objectFit={'cover'}
                                height={'200px'}
                                src={image}
                                alt={''}
                            />
                            <Heading
                                className="title-container"
                                size={'md'}
                                my={'0.5rem'}
                            >
                                {title}
                            </Heading>
                            <Text>{text}</Text>
                        </motion.div>
                    </motion.div>
                </div>
            </li>
        </GridItem>
    )
}
