import React from 'react'
import { ExpCard } from './ExpCard'
import Coeo from '../images/Coeo.png'
import Uminova from '../images/uminova.png'
import Telia from '../images/telia.png'
import Umu from '../images/umu.png'
import Netlight from '../images/netlight.png'

interface ExpListProps {
    type: 'work' | 'education' | 'other'
}

interface ExpCardProps {
    position: string
    company: string
    image: string
    period: string
}
export const ExpList: React.FC<ExpListProps> = ({ type }) => {
    const expList: ExpCardProps[] = [
        {
            position: 'Consultant',
            company: 'Netlight',
            image: Netlight,
            period: 'Sep 2022 -',
        },
        {
            position: 'Developer',
            company: 'Coeo',
            image: Coeo,
            period: 'Jun 2021- Dec 2021',
        },
        {
            position: 'Developer',
            company: 'Metrium',
            image: Uminova,
            period: 'Feb 2021- Jun 2021',
        },
        {
            position: 'Operations Engineer',
            company: 'Telia',
            image: Telia,
            period: 'Jun - Aug 2019 & 2020',
        },
    ]

    const educationList: ExpCardProps[] = [
        {
            position: 'Master of Science, Interaction & design',
            company: 'Umeå University',
            image: Umu,
            period: '',
        },
    ]

    const otherList: ExpCardProps[] = [
        {
            position: 'Buddy programme',
            company: 'Umeå University',
            image: Umu,
            period: '',
        },
    ]

    return (
        <>
            {type === 'work' &&
                expList.map((exp, index) => (
                    <ExpCard key={`exp:${index}`} {...exp} />
                ))}
            {type === 'education' &&
                educationList.map((exp, index) => (
                    <ExpCard key={`edu:${index}`} {...exp} />
                ))}
            {type === 'other' &&
                otherList.map((exp, index) => (
                    <ExpCard key={`other:${index}`} {...exp} />
                ))}
        </>
    )
}
