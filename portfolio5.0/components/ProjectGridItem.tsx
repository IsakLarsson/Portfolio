import { Image, GridItem, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import NextImage from 'next/image'

interface Props {
    title: string
    children: ReactNode
    src: string
}
export const ProjectGridItem: React.FC<Props> = ({ title, children, src }) => {
    return (
        <GridItem>
            <Image
                boxSize={'md'}
                borderRadius={'0.5rem'}
                objectFit={'cover'}
                maxHeight={'150px'}
                src={src}
                alt={''}
            />
            <Heading size={'md'} my={'0.5rem'}>
                {title}
            </Heading>
            <Text>{children}</Text>
        </GridItem>
    )
}
