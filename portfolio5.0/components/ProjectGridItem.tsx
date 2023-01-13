import { Image, GridItem, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Link from 'next/link'

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
        <GridItem>
            <Link href={`projects/${href}`}>
                <Image
                    boxSize={'md'}
                    borderRadius={'0.5rem'}
                    objectFit={'cover'}
                    maxHeight={'150px'}
                    src={src}
                    alt={''}
                />
            </Link>
            <Heading size={'md'} my={'0.5rem'}>
                {title}
            </Heading>
            <Text>{children}</Text>
        </GridItem>
    )
}
