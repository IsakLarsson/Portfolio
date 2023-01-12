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
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
}
const theme = extendTheme({
    config,
    fonts: {
        heading: `'M PLUS Rounded 1C', sans-serif`,
        body: `'M PLUS Rounded 1C', sans-serif`,
    },
    components,
})

export default theme
