import { HStack, Tag } from '@chakra-ui/react'
import React from 'react'

interface Props {
    tags: string[]
}
export const Tags: React.FC<Props> = ({ tags }) => {
    return (
        <HStack>
            {tags.map((text: string) => (
                <Tag variant={'subtle'} key={`tag:${text}`} colorScheme={'red'}>
                    {text}
                </Tag>
            ))}
        </HStack>
    )
}
