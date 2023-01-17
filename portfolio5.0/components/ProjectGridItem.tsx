import { Image, GridItem, Heading, Text, Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { StaggeredItem } from './StaggeredItem'
import { motion } from 'framer-motion'

interface Props {
    title: string
    children: ReactNode
    src: string
    href: string
}
export const ProjectGridItem: React.FC<Props> = ({
    title,
    children,
    src,
    href,
}) => {
    return (
        <StaggeredItem>
            <GridItem>
                <Link href={`projects${href}`}>
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <Image
                            boxSize={'md'}
                            borderRadius={'0.5rem'}
                            objectFit={'cover'}
                            height={'200px'}
                            src={src}
                            alt={''}
                        />
                    </motion.div>
                </Link>
                <Heading size={'md'} my={'0.5rem'}>
                    {title}
                </Heading>
                <Text>{children}</Text>
            </GridItem>
        </StaggeredItem>
    )
}
