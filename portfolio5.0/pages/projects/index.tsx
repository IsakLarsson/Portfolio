import Link from 'next/link'
import { Transition } from '../../components/Transition'

export default function ProjectPage() {
    return (
        <div>
            <Transition>
                <Link href={'/'}>Home</Link>
            </Transition>
        </div>
    )
}
