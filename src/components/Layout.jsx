import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <Flex flexDirection="column" id="app-wrapper">
            <Navbar />
            <Outlet />
        </Flex>
    )
}

export default Layout
