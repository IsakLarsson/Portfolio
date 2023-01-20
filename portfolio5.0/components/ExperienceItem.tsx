import { Flex, Heading, Image, Tag, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
interface Props {
    src: string
    title: string
    subTitle: string
    period?: string
}
export const ExperienceItem: React.FC<Props> = ({
    src,
    title,
    subTitle,
    period,
}) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
        >
            <Flex
                borderRadius={'md'}
                bg={'#303745 '}
                justify={'space-between'}
                alignItems={'center'}
                p={'0 1rem 0 0'}
            >
                <Flex alignItems={'center'}>
                    <Image
                        borderRadius={'md'}
                        width={75}
                        height={75}
                        src={src}
                        alt=""
                    />
                    <Flex ml={'1rem'} direction={'column'}>
                        <Heading size={['sm', 'md']}>{title}</Heading>
                        <Text fontWeight={'medium'} fontSize={['sm', 'md']}>
                            {subTitle}
                        </Text>
                    </Flex>
                </Flex>
                <Text fontWeight={'medium'} fontSize={['sm', 'md']}>
                    {period}
                </Text>
            </Flex>
        </motion.div>
    )
}
