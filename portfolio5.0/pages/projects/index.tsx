import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { Transition } from '../../components/Transition'

export default function ProjectPage() {
    return (
        <Transition>
            <Heading>Projects</Heading>
            <Link href={'/'}>Home link</Link>
        </Transition>
    )
}
