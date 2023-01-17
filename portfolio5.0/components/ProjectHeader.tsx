import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BadgeList } from './BadgeList'

interface Props {
    title: string
    href?: string
    areas: string[]
}
export const ProjectHeader: React.FC<Props> = ({ title, areas, href }) => {
    return (
        <Box mb={5}>
            <Heading size={'lg'}>{title}</Heading>
            <BadgeList badges={areas} />
            {href && <Link href={href}>Source</Link>}
        </Box>
    )
}
