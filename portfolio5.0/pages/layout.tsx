import { Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import styles from '../styles/Home.module.css'

interface Props {
    children: ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container minH={'120vh'} maxW={'2xl'}>
            <main className={styles.main}>{children}</main>
        </Container>
    )
}
