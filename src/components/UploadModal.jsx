import {
    Button,
    Flex,
    Icon,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import { FaFileUpload } from 'react-icons/fa'

const UploadModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={'center'}>Upload Image</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex flexDirection={'column'} alignItems="center">
                        <Text>
                            Upload a image from your computer to share it with
                            others
                        </Text>
                        <Flex
                            id="upload-box"
                            bg="gray.200"
                            mt={4}
                            w="full"
                            p={4}
                            border={'dotted 2px #333'}
                            alignItems={'center'}
                            cursor={'pointer'}
                            onClick={() => {
                                console.log('upload image clicked')
                            }}
                            flexDirection={'column'}
                        >
                            <FaFileUpload size={64} />
                            <Text mt={2} fontSize="xl">
                                Upload
                            </Text>
                        </Flex>
                        <Input placeholder="Title" size="lg" mt={4} />
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UploadModal
