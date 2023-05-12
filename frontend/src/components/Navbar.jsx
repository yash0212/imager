import { Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import UploadModal from './UploadModal'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const {
        isOpen: isUploadModalOpen,
        onOpen: openUploadModal,
        onClose: closeUploadModal,
    } = useDisclosure()
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()

    return (
        <Flex
            bgColor="primary"
            px={128}
            py={2}
            color="white"
            justifyContent={'space-between'}
        >
            <Flex alignItems={'center'}>
                <Image
                    src="https://placehold.co/64x32?text=Imager"
                    alt="Logo"
                />
                {user && (
                    <Text ml={4} whiteSpace={'nowrap'}>
                        Hello, {user.name}!
                    </Text>
                )}
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
                {isAuthenticated ? (
                    <Button
                        ml={2}
                        colorScheme="facebook"
                        onClick={() => {
                            logout()
                        }}
                    >
                        Signout
                    </Button>
                ) : (
                    <Button
                        ml={2}
                        colorScheme="facebook"
                        onClick={() => {
                            loginWithRedirect({ screen_hint: 'signup' })
                        }}
                    >
                        Signin
                    </Button>
                )}
            </Flex>
            <UploadModal
                isOpen={isUploadModalOpen}
                onClose={closeUploadModal}
            />
        </Flex>
    )
}

export default Navbar
