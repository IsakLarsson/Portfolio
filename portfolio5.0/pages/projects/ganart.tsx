import { Heading } from '@chakra-ui/react'
import React from 'react'
import { ProjectHeader } from '../../components/ProjectHeader'
import { Transition } from '../../components/Transition'

const areas = ['Deep Learning', 'Keras', 'Tensorflow', 'Python']
export default function ProjectPage() {
    return (
        <Transition>
            <ProjectHeader title="GAN Art" areas={areas} />
        </Transition>
    )
}
