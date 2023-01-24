import { SimpleGrid } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { ProjectItem } from './ProjectItem'

const projects = [
    {
        title: 'GAN Art',
        text: 'A Deeplearning model for generating art based on the worlds greates artworks',
        image: 'images/GAN.png',
    },
    {
        title: '360 Feedback',
        text: 'A Deeplearning model for generating art based on the worlds greates artworks',
        image: '/images/wideparadox.svg',
    },
    {
        title: 'Freshman app',
        text: 'A Deeplearning model for generating art based on the worlds greates artworks',
        image: '/images/freshmanwide.svg',
    },
]

const ProjectList: React.FC = () => {
    return (
        <ul className="card-list">
            <SimpleGrid columns={[1, 2]} spacing={5}>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={nanoid()}
                        title={project.title}
                        text={project.text}
                        image={project.image}
                        index={index}
                    />
                ))}
            </SimpleGrid>
        </ul>
    )
}

export default ProjectList
