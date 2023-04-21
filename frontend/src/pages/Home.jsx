import { AspectRatio, Flex, Grid, HStack, Image } from '@chakra-ui/react'

const Home = () => {
    const images = [
        {
            link: '/images/beach.jpg',
            title: 'abc',
            starCount: 0,
        },
        {
            link: '/images/building.jpg',
            title: 'def',
            starCount: 0,
        },
        {
            link: '/images/city.jpg',
            title: 'def',
            starCount: 0,
        },
        {
            link: '/images/forest.jpg',
            title: 'def',
            starCount: 0,
        },
        {
            link: '/images/milky-way.jpg',
            title: 'def',
            starCount: 0,
        },
        {
            link: '/images/mountains.jpg',
            title: 'def',
            starCount: 0,
        },
        {
            link: '/images/viper.jpg',
            title: 'def',
            starCount: 0,
        },
    ]

    return (
        <Flex flexDirection={'column'} py={4}>
            <Flex flexWrap={'wrap'} id="images-wrapper">
                {images.map((image, i) => {
                    return (
                        <Image
                            key={i}
                            maxH={400}
                            src={image.link}
                            mr={4}
                            mb={4}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default Home
