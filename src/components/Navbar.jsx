import { Button, Flex, Image } from '@chakra-ui/react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const Navbar = () => {
    return (
        <Flex
            bgColor="primary"
            px={128}
            py={2}
            color="white"
            justifyContent={'space-between'}
        >
            <Flex>
                <Image
                    src="https://placehold.co/64x32?text=Imager"
                    alt="Logo"
                />
            </Flex>
            <Flex>
                <Button
                    colorScheme="facebook"
                    leftIcon={<FaCloudUploadAlt size={'24'} />}
                    onClick={() => {
                        console.log('upload button clicked')
                    }}
                >
                    Upload
                </Button>
                <Button
                    ml={2}
                    colorScheme="facebook"
                    onClick={() => {
                        console.log('signin button clicked')
                    }}
                >
                    Signin
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar
