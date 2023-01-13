import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { ExperienceItem } from '../components/ExperienceItem'
import Selfie from '../components/Selfie'
import { Tags } from '../components/Tags'
import { Transition } from '../components/Transition'

export default function Home() {
    return (
        <>
            <Transition>
                <Flex justify={'space-between'} alignItems={'center'}>
                    <Flex direction={'column'}>
                        <Heading>Hello there, I'm Isak</Heading>
                        <Tags tags={['Consultant', 'Music Lover']} />
                    </Flex>
                    <Selfie />
                </Flex>
                <Heading variant="underline">About me</Heading>
                <Text align={'justify'}>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </Text>

                <Heading variant={'underline'}>Experience</Heading>
                <VStack alignItems={'stretch'} gap={2}>
                    <ExperienceItem
                        src="/images/netlight.png"
                        title="Consultant"
                        subTitle="Netlight"
                        period="Apr 2022 - Present"
                    />
                    <ExperienceItem
                        src="/images/netlight.png"
                        title="Frontend Developer"
                        subTitle="Coeo"
                        period="Jun 2021 - Jun 2022"
                    />
                    <ExperienceItem
                        src="/images/uminova.png"
                        title="Frontend Developer"
                        subTitle="Metrium"
                        period="Fev 2021 - Jun 2021"
                    />
                </VStack>
                <Heading variant={'underline'}>Education</Heading>
                <ExperienceItem
                    src="/images/umu.png"
                    title="Umeå University"
                    subTitle="Master of science, Interaction & Design"
                />
            </Transition>
        </>
    )
}
