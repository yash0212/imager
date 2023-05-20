import { Flex, Icon, Image, Text, WrapItem } from '@chakra-ui/react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { GoArrowDown, GoArrowUp } from 'react-icons/go'

const ImageCard = ({ imageData, upvote, downvote }) => {
    const [isHovering, setHovering] = useState()

    return (
        <WrapItem
            onMouseEnter={() => {
                setHovering(true)
            }}
            onMouseLeave={() => {
                setHovering(false)
            }}
        >
            <Image maxH={350} src={imageData.link} />
            <Flex
                position={'absolute'}
                bottom={0}
                w={'full'}
                display={isHovering ? 'flex' : 'none'}
            >
                <Flex
                    w="full"
                    h="full"
                    opacity={0.5}
                    bgImage={'linear-gradient(transparent 0%, black 100%)'}
                    position={'absolute'}
                ></Flex>
                <Flex
                    px={2}
                    pt={10}
                    pb={2}
                    zIndex={2}
                    justifyContent={'space-between'}
                    color={'white'}
                    w="full"
                >
                    <Text>{imageData.title}</Text>
                    <Flex alignItems={'center'}>
                        <Icon as={FaStar} mt={'-2px'} />
                        <Text ml={1}>{imageData.starCount}</Text>

                        <Icon
                            as={GoArrowUp}
                            ml={5}
                            mt={'-2px'}
                            fontSize={'2xl'}
                            cursor="pointer"
                            onClick={() => {
                                upvote(imageData.id)
                            }}
                        />
                        <Icon
                            as={GoArrowDown}
                            mt={'-2px'}
                            ml={1}
                            fontSize={'2xl'}
                            cursor="pointer"
                            onClick={() => {
                                downvote(imageData.id)
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </WrapItem>
    )
}

export default ImageCard
