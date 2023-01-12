import { Box, Container, HStack, Link, List } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export default function Navbar() {
    return (
        <Container m={'1rem 0 3rem 0'}>
            <HStack>
                <Link as={NextLink} href="/">
                    Home
                </Link>
                <Link as={NextLink} href="/projects">
                    Projects
                </Link>
            </HStack>
        </Container>
    )
}
