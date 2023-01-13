import { Badge, HStack } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React from 'react'

interface Props {
    badges: string[]
}
export const BadgeList: React.FC<Props> = ({ badges }) => {
    return (
        <HStack>
            {badges.map((badgeText) => (
                <Badge colorScheme={'green'} variant={'subtle'} key={nanoid()}>
                    {badgeText}
                </Badge>
            ))}
        </HStack>
    )
}
