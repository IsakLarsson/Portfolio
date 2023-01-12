import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const components = {
    Heading: {
        variants: {
            underline: {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#3A3B49',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
}
const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: '',
            },
        }),
    },
    config,
    fonts: {
        heading: `'M PLUS Rounded 1C', sans-serif`,
        body: `'M PLUS Rounded 1C', sans-serif`,
    },
    components,
})

export default theme
