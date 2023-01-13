import { Center, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Transition } from '../../components/Transition'

type Props = {}
export default function ByePage({}: Props) {
    useEffect(() => {
        console.log(window.location.href)
        /* setTimeout(function () {
            window.location.href = 'http://stackoverflow.com'
        }, 1000) */
    })
    return (
        <Transition>
            <Center>
                <Heading> 👋 Goodbye! 👋</Heading>
            </Center>
        </Transition>
    )
}
