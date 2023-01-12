import { Heading } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '../components/Transition'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    return (
        <>
            <Transition>
                <Heading>Page heading</Heading>
                <p>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </p>
                <Link href={'/projects'}>Proj</Link>
            </Transition>
        </>
    )
}
