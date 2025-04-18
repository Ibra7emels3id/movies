
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { useAuthContext } from './Context/context'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Movie from './Pages/movie/movie'

function App() {
    const { data, page, setPage } = useAuthContext()




    return (
        // Set Router 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/movie/:id" element={<Movie />} />


                
            </Routes>
        </BrowserRouter>
    )
}

export default App
