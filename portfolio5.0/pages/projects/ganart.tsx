import { Heading, HStack, Text, Image, Icon } from '@chakra-ui/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Head from 'next/head'
import React from 'react'
import { ProjectHeader } from '../../components/ProjectHeader'
import { Transition } from '../../components/Transition'

const areas = ['Deep Learning', 'Keras', 'Tensorflow', 'Python']
export default function ProjectPage() {
    return (
        <Transition>
            <ProjectHeader
                title="GAN Art"
                areas={areas}
                href="https://www.kaggle.com/code/isaklarsson/gan-art-generator"
            />
            <Text>
                A deeplearning project where I researched the possibility of
                training a neural network to generate artworks on its own. The
                model consisted of a Generative Adversarial Network (GAN), it
                was trained on 8683 artworks and managed to generate some pretty
                interesting, although very abstract stuff. It utilizes something
                called a GAN (Generative Adversarial Network) which is 2 AI
                models competing against each other. One is generating fake
                images while the other one is learning how to distinguish fake
                images from real ones. This leads to both of them getting better
                at what they do, the generator starts generating better and
                better images and the discriminator gets better at finding the
                fakes. And the circle goes on. This particular generator was
                trained for 250 iterations, which took about 1.5 hours in total.
                Note that this is nowhere near the size nor performance of the
                DALL-E's and Stable Diffusion models of today.
            </Text>
            <HStack mt={'1rem'}>
                <Image src={'/images/ganstart.jpg'} alt={''} />
                <Icon
                    as={HiOutlineArrowNarrowRight}
                    color={'whitesmoke'}
                    boxSize={'3rem'}
                />
                <Image src={'/images/ganfinish.jpg'} alt={''} />
            </HStack>
        </Transition>
    )
}
