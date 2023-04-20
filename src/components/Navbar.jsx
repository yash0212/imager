import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import UploadModal from './UploadModal'

const Navbar = () => {
    const {
        isOpen: isUploadModalOpen,
        onOpen: openUploadModal,
        onClose: closeUploadModal,
    } = useDisclosure()

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
                        openUploadModal()
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
            <UploadModal
                isOpen={isUploadModalOpen}
                onClose={closeUploadModal}
            />
        </Flex>
    )
}

export default Navbar
