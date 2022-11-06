import React, { useRef, useEffect } from 'react'
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
const About = () => {
    const aboutRef = useRef(null)
    const isInView = useInView(aboutRef)

    const projects = [
        'This would be my first project info board',
        'This is my second project hehe',
        'as well as this one',
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
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={2}>
                        <h1>Projects</h1>
                    </GridItem>
                    <VStack>
                        {projects.map((project) => (
                            <GridItem
                                rowSpan={1}
                                colSpan={1}
                                bg={'#FFF8F0'}
                                borderRadius={5}
                                w={250}
                            >
                                <p>some text</p>
                            </GridItem>
                        ))}
                    </VStack>
                    <GridItem>
                        <VStack>
                            <h1>Titel</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Nec
                                sodales sollicitudin urna volutpat diam id
                                viverra massa sed. Sit pellentesque porta arcu
                                amet. Sapien ac non vel placerat nibh elit proin
                                suspendisse aliquet. Nunc aliquet quis integer
                                tincidunt volutpat dui ut ipsum. Auctor sed eget
                                sed pretium nisi risus et cursus turpis. Id
                                augue nunc elit urna. Posuere sed ac ac
                                scelerisque et sit ipsum velit bibendum. Id
                                cursus orci mi faucibus egestas ut turpis
                                malesuada aenean. Mattis fermentum massa
                                lobortis mattis odio suspendisse scelerisque.
                                Pulvinar quam.
                            </p>
                        </VStack>
                    </GridItem>
                </Grid>
            </Flex>
        </section>
    )
}

export default About
