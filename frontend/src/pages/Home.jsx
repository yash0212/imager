import { Flex, Wrap } from '@chakra-ui/react'
import ImageCard from '../components/ImageCard'
import { useState } from 'react'

const Home = () => {
    const [images, setImages] = useState([
        {
            id: 1,
            link: '/images/beach.jpg',
            title: 'Beach',
            starCount: 0,
        },
        {
            id: 2,
            link: '/images/building.jpg',
            title: 'Building',
            starCount: 50,
        },
        {
            id: 3,
            link: '/images/city.jpg',
            title: 'City',
            starCount: 23,
        },
        {
            id: 4,
            link: '/images/ice-mountains.jpg',
            title: 'Ice Mountains',
            starCount: 42,
        },
        {
            id: 5,
            link: '/images/forest.jpg',
            title: 'Forest',
            starCount: 10,
        },
        {
            id: 6,
            link: '/images/crowd.jpg',
            title: 'Crowd',
            starCount: 999,
        },
        {
            id: 7,
            link: '/images/milky-way.jpg',
            title: 'Milky Way',
            starCount: 54,
        },
        {
            id: 8,
            link: '/images/mountains.jpg',
            title: 'Mountains',
            starCount: 5345,
        },
        {
            id: 9,
            link: '/images/breakfast.jpg',
            title: 'Breakfast',
            starCount: 87,
        },
        {
            id: 10,
            link: '/images/viper.jpg',
            title: 'Viper',
            starCount: 39,
        },
    ])

    const upvote = id => {
        let _images = [...images]
        _images = _images.map(img => {
            if (img.id === id) {
                img.starCount += 1
            }
            return img
        })

        setImages(_images)
    }

    const downvote = id => {
        let _images = [...images]
        _images = _images.map(img => {
            if (img.id === id) {
                img.starCount -= 1
            }
            return img
        })

        setImages(_images)
    }

    return (
        <Flex flexDirection={'column'} py={4}>
            <Wrap id="images-wrapper" spacing={4}>
                {images.map(image => {
                    return (
                        <ImageCard
                            imageData={image}
                            key={image.id}
                            upvote={upvote}
                            downvote={downvote}
                        />
                    )
                })}
            </Wrap>
        </Flex>
    )
}

export default Home
