import { ChakraProvider, Heading } from '@chakra-ui/react'
import '@fontsource/m-plus-rounded-1c'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import theme from '../styles/theme'
import { Layout } from './layout'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Heading>Heading</Heading>
                <AnimatePresence mode="wait" initial={false}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
