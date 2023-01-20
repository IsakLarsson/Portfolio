import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import React from 'react'

type TagContent = {
    title: string
    icon: any
}
interface Props {
    tags: TagContent[]
    color: string
}
export const Tags: React.FC<Props> = ({ tags, color }) => {
    return (
        <HStack pt={'0.3rem'}>
            {tags.map((tagContent: TagContent) => (
                <Tag
                    variant={'subtle'}
                    key={`tag:${tagContent.title}`}
                    colorScheme={color}
                >
                    <TagLeftIcon as={tagContent.icon} />
                    <TagLabel>{tagContent.title}</TagLabel>
                </Tag>
            ))}
        </HStack>
    )
}
