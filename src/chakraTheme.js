import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: '#202023',
    },
    fonts: {
        heading: 'Rubik',
        body: 'Roboto',
    },
    styles: {
        global: {
            h1: { fontFamily: 'Rubik' },
            h2: { fontFamily: 'Rubik' },
            h3: { fontFamily: 'Rubik' },
            h4: { fontFamily: 'Rubik' },
            h5: { fontFamily: 'Rubik' },
            h6: { fontFamily: 'Rubik' },
            body: { fontFamily: 'Roboto' },
        },
    },
})

export default theme
