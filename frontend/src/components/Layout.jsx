import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <Flex flexDirection="column" id="app-wrapper">
            <Navbar />
            <Flex px={128}>
                <Outlet />
            </Flex>
        </Flex>
    )
}

export default Layout
