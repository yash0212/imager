import { Flex, Heading, Text } from '@chakra-ui/react'

const Home = () => {
    return (
        <Flex flexDirection={'column'}>
            <Heading as="h1" size="4xl">
                Imager
            </Heading>
            <Text>A simple sapp to share photos</Text>
        </Flex>
    )
}

export default Home
