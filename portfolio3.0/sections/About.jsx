import React, { useRef, useEffect } from 'react'
import styles from '../styles/About.module.css'
import {
    Grid,
    Center,
    Box,
    Container,
    Flex,
    HStack,
    VStack,
    GridItem,
} from '@chakra-ui/react'
import { animate, motion, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import InfoSection from '../components/InfoSection'
import ProjectCard from '../components/ProjectCard'

const About = () => {
    const aboutRef = useRef(null)
    const isInView = useInView(aboutRef)

    const projects = [
        {
            title: 'Title',
            shortDesc: 'short description',
            longDesc:
                'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
            role: 'Developer',
        },
        {
            title: 'Title',
            shortDesc: 'short description',
            longDesc:
                'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
            role: 'Developer',
        },
        {
            title: 'Title',
            shortDesc: 'short description',
            longDesc:
                'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
            role: 'Developer',
        },
    ]
    useEffect(() => {
        console.log(isInView)
        return () => {}
    }, [isInView])

    return (
        <section>
            <Flex
                height={'100vh '}
                width={'100%'}
                direction={'column'}
                alignItems={'center'}
            >
                <h1>Projects</h1>
                <Grid
                    width={'90%'}
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={'1em'}
                >
                    <GridItem rowSpan={2} colSpan={1}>
                        {projects.map((project) => (
                            <GridItem rowSpan={1}>
                                <ProjectCard
                                    title={project.title}
                                    text={project.shortDesc}
                                />
                            </GridItem>
                        ))}
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={1}>
                        <InfoSection title={'hello'} text={'hellohello'} />
                    </GridItem>
                </Grid>
            </Flex>
        </section>
    )
}

export default About
