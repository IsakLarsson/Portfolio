import { Image, GridItem, Heading, Text, Box, VStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { StaggeredItem } from './StaggeredItem'

interface Props {
    title: string
    children: ReactNode
    src: string
}

export const ProjectGridItem: React.FC<Props> = ({ title, children, src }) => {
    return (
        <StaggeredItem>
            <GridItem my={'1rem'}>
                <Box display={['block', 'flex']} color={'#eee'}>
                    <Image
                        h={['200px', '150px']}
                        w={['100%', '150px']}
                        borderRadius={'0.3rem'}
                        objectFit={'cover'}
                        src={src}
                        alt={''}
                    />
                    <VStack
                        h={'100%'}
                        p={['1rem 1', '1rem']}
                        mt={['1rem', '0']}
                        alignItems={'flex-start'}
                    >
                        <Heading size={'md'}>{title}</Heading>
                        <Text>{children}</Text>
                    </VStack>
                </Box>
            </GridItem>
        </StaggeredItem>
    )
}
