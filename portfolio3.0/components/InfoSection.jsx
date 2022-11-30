import { VStack } from '@chakra-ui/react'

const InfoSection = ({ title, text }) => {
    return (
        <>
            <VStack>
                <h1 style={{ marginTop: '0' }}>{title}</h1>
                <p>{text}</p>
            </VStack>
        </>
    )
}

export default InfoSection
