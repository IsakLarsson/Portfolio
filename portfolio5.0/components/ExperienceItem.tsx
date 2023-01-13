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
            whileHover={{ x: 20 }}
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
                dropShadow={'lg'}
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
                        <Heading size={'md'}>{title}</Heading>
                        <Text>{subTitle}</Text>
                    </Flex>
                </Flex>
                <Text>{period}</Text>
            </Flex>
        </motion.div>
    )
}
