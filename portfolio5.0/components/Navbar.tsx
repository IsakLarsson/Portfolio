import { HStack, Icon, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { Router } from 'next/router'
import React, { ReactNode } from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'

const FONT_SIZE = 'xl'

interface NavItemProps {
    href: string
    currentPath: string
    children: ReactNode
    external?: boolean
}
const NavItem: React.FC<NavItemProps> = ({
    href,
    currentPath,
    children,
    external,
}) => {
    const active = href == currentPath
    external = external || false

    return (
        <motion.div style={{ height: '100%' }} whileHover={{ y: 2 }}>
            <Link
                color={active ? 'tomato' : 'whitesmoke'}
                _hover={{ textDecor: 'none' }}
                as={NextLink}
                href={href}
                isExternal={external}
            >
                {external ? (
                    children
                ) : (
                    <Text
                        fontSize={FONT_SIZE}
                        fontWeight={active ? 'bold' : 'normal'}
                    >
                        {children}
                    </Text>
                )}
            </Link>
        </motion.div>
    )
}

interface Props {
    router: Router
}
const Navbar: React.FC<Props> = ({ router }) => {
    return (
        <HStack
            css={'backdrop-filter: blur(2px)'}
            position="fixed"
            zIndex={2}
            as={'nav'}
            gap={8}
            left={'50%'}
            maxW={'2xl'}
            width={['100vw', '100vw', '2xl']}
            transform={'translateX(-50%)'}
            p={'0.5rem 1rem'}
            justifyContent={'space-between'}
        >
            <HStack gap={2}>
                <NavItem currentPath={router.pathname} href="/">
                    Home
                </NavItem>
                <NavItem currentPath={router.pathname} href="/projects">
                    Projects
                </NavItem>
            </HStack>
            <HStack gap={2}>
                <NavItem
                    currentPath={router.pathname}
                    href="https://github.com/IsakLarsson"
                    external={true}
                >
                    <Icon as={FaGithub} />
                </NavItem>
                <NavItem
                    currentPath={router.pathname}
                    href="https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/"
                    external={true}
                >
                    <Icon as={TfiLinkedin} />
                </NavItem>
            </HStack>
        </HStack>
    )
}

export default Navbar
