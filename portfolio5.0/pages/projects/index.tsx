import { Heading, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../../components/ProjectGridItem'
import { Transition } from '../../components/Transition'

export default function ProjectPage() {
    return (
        <Transition>
            <Heading variant={'underline'}>Projects</Heading>
            <SimpleGrid columns={[1, 2]} spacing={10}>
                <ProjectGridItem src="images/GAN.png" title="Paradox">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                </ProjectGridItem>
                <ProjectGridItem src="/images/Paradox.jpg" title="Paradox">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                </ProjectGridItem>
                <ProjectGridItem src="/images/netlight.png" title="Paradox">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                </ProjectGridItem>
            </SimpleGrid>
        </Transition>
    )
}
