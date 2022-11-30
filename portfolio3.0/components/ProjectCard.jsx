import { Flex } from '@chakra-ui/react'
import styles from '../styles/About.module.css'
export const ProjectCard = ({ title, text }) => {
    return (
        <Flex
            bg={'#FFF8F0'}
            borderRadius={5}
            w={'100%'}
            h={150}
            p={'1em'}
            className={styles.projectCard}
            direction={'column'}
        >
            <h2>{title}</h2>
            <p>{text}</p>
        </Flex>
    )
}

export default ProjectCard
