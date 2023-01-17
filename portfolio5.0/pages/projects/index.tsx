import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { ProjectGridItem } from '../../components/ProjectGridItem'
import { Transition } from '../../components/Transition'

export default function ProjectPage() {
    return (
        <Transition>
            <Box mt={10}>
                <Heading>Projects</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat. Lorem ipsum
                    dolor sit amet, qui minim labore adipisicing minim sint
                    cillum sint consectetur cupidatat.
                </Text>
                <Heading variant={'underline'}>Projects</Heading>
                <SimpleGrid columns={[1, 2]} spacing={5}>
                    <ProjectGridItem
                        src="images/GAN.png"
                        title="DAIVinci"
                        href="/ganart"
                    >
                        A Deeplearning model for generating art based on the
                        worlds greatest artworks
                    </ProjectGridItem>
                    <ProjectGridItem
                        src="/images/wideparadox.svg"
                        title="360 Feedback"
                        href="/paradox"
                    >
                        An employee evaluation webapp for game dev studio
                        Paradox Arctic
                    </ProjectGridItem>
                    <ProjectGridItem
                        src="/images/freshmanwide.svg"
                        title="Freshman app"
                        href="/freshman"
                    >
                        A mobile app for helping university newcomers to settle
                        in and attend events
                    </ProjectGridItem>
                </SimpleGrid>
            </Box>
        </Transition>
    )
}
