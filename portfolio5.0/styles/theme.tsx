import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const theme = extendTheme({
    ...config,
    fonts: {
        heading: `'M PLUS Rounded 1C', sans-serif`,
        body: `'M PLUS Rounded 1C', sans-serif`,
    },
})

export default theme
