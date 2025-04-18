import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProviderContext } from './Context/context.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProviderContext>
        <StrictMode>
            <App />
        </StrictMode>,
    </AuthProviderContext>
)
