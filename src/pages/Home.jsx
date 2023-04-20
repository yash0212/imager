import { AspectRatio, Flex, Grid, HStack, Image } from '@chakra-ui/react'

const Home = () => {
    const images = [
        {
            link: 'https://placehold.co/600x400/png',
            title: 'abc',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/500x400/png',
            title: 'def',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/300x400/png',
            title: 'def',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/700x400/png',
            title: 'def',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/200x400/png',
            title: 'def',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/300x400/png',
            title: 'def',
            starCount: 0,
        },
        {
            link: 'https://placehold.co/600x400/png',
            title: 'def',
            starCount: 0,
        },
    ]

    return (
        <Flex flexDirection={'column'} py={4}>
            <Flex flexWrap={'wrap'} id="images-wrapper">
                {images.map((image, i) => {
                    return <Image key={i} src={image.link} mr={4} mb={4} />
                })}
            </Flex>
        </Flex>
    )
}

export default Home
