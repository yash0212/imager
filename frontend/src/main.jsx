import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import theme from './chakraTheme'
import Auth0Provider from './auth/auth0-provider-with-history'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Auth0Provider>
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </ChakraProvider>
)
