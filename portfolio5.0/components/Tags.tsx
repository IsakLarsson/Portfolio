import { HStack, Tag } from '@chakra-ui/react'
import React from 'react'

interface Props {
    tags: string[]
    color: string
}
export const Tags: React.FC<Props> = ({ tags, color }) => {
    return (
        <HStack>
            {tags.map((text: string) => (
                <Tag variant={'subtle'} key={`tag:${text}`} colorScheme={color}>
                    {text}
                </Tag>
            ))}
        </HStack>
    )
}
