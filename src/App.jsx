
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { useAuthContext } from './Context/context'
import Home from './Pages/Home/Home'

function App() {
    const { data, page, setPage } = useAuthContext()




    return (
        // Set Router 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                    
            </Routes>
        </BrowserRouter>
    )
}

export default App
