import { HStack, Text, Link, Box, Flex, Container } from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { ReactNode } from 'react'

const FONT_SIZE = 'l'

interface NavItemProps {
    href: string
    children: ReactNode
}
const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
    <Link as={NextLink} href={href}>
        {children}
    </Link>
)

export default function Navbar() {
    return (
        <Container maxW={'2xl'}>
            <HStack as={'nav'}>
                <Text fontSize={'3xl'}>Isak Larsson</Text>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/projects">Projects</NavItem>
            </HStack>
        </Container>
    )
}
