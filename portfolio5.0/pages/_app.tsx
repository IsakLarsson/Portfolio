import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import theme from '../styles/theme'
import '@fontsource/m-plus-rounded-1c'
import { Layout } from './layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Heading>Hello</Heading>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
