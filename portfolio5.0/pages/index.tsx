import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { ExperienceItem } from '../components/ExperienceItem'
import Selfie from '../components/Selfie'
import { StaggeredItem } from '../components/StaggeredItem'
import { Tags } from '../components/Tags'
import { Transition } from '../components/Transition'
import { FaGuitar } from 'react-icons/fa'
import { IoIosFitness } from 'react-icons/io'
import { AiOutlineCode } from 'react-icons/ai'
export default function Home() {
    return (
        <>
            <Transition>
                <StaggeredItem>
                    <Flex
                        wrap={'wrap-reverse'}
                        justify={'space-between'}
                        alignItems={'center'}
                    >
                        <Flex direction={'column'}>
                            <Heading>Hello there, I&apos;m Isak</Heading>
                            <Tags
                                tags={[
                                    { title: 'Developer', icon: AiOutlineCode },
                                    { title: 'Music Lover', icon: FaGuitar },
                                    /* {
                                        title: 'Lifting enthusiast',
                                        icon: IoIosFitness,
                                    }, */
                                ]}
                                color="teal"
                            />
                        </Flex>
                        <Selfie />
                    </Flex>
                </StaggeredItem>
                <StaggeredItem>
                    <Heading variant="underline">About me</Heading>
                    <Text align={['initial', 'justify']}>
                        I&apos;m a developer with a passion for creating
                        products that are both beautiful and easy to use.
                        I&apos;m always looking to learn more about the
                        different aspects of tech, like backend development and
                        AI. I&apos;m also a big believer in the importance of
                        good user experience. When I&apos;m not coding away, you
                        can usually find me picking away on my guitar, trying
                        out new songs and styles. I&apos;m excited to take on
                        new projects and continue growing as a developer, and as
                        a person. Let&apos;s build something awesome together!
                    </Text>
                </StaggeredItem>
                <StaggeredItem>
                    <Heading variant={'underline'}>Experience</Heading>
                </StaggeredItem>
                <VStack alignItems={'stretch'} gap={2}>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/netlight.png"
                            title="Consultant"
                            subTitle="Netlight"
                            period="Apr 2022 - Present"
                        />
                    </StaggeredItem>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/Coeo.png"
                            title="Frontend Developer"
                            subTitle="Coeo"
                            period="Jun 2021 - Jun 2022"
                        />
                    </StaggeredItem>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/uminova.png"
                            title="Frontend Developer"
                            subTitle="Metrium"
                            period="Feb 2021 - Jun 2021"
                        />
                    </StaggeredItem>
                </VStack>
                <StaggeredItem>
                    <Heading variant={'underline'}>Education</Heading>
                    <ExperienceItem
                        src="/images/umu.png"
                        title="Umeå University"
                        subTitle="Master of science, Interaction & Design"
                    />
                </StaggeredItem>
            </Transition>
        </>
    )
}
