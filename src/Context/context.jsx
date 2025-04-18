import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext({});

// Create Context Provider
export const AuthProviderContext = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [naw , setNaw] = useState([])

    const [page, setPage] = useState(1)
    const [dataId, setDataId] = useState({})

    console.log(tv);
    // console.log(dataId);

    // Get Data Api Movies
    const getDataMovies = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/3/movie/popular?api_key=${import.meta.env.VITE_PUBLIC_API_SECRET_KEY}&language=en-US&page=${page}`)
            setMovies(res.data.results)
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    }

    // Get Data Naw Movies
    const getNowMovies = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/3/movie/now_playing?api_key=${import.meta.env.VITE_PUBLIC_API_SECRET_KEY}&language=en-US&page=${page}`)
            setNaw(res.data.results)
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    }   

    // Get Data Api Tv
    const getDataTv = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/3/tv/popular?api_key=${import.meta.env.VITE_PUBLIC_API_SECRET_KEY}&language=en-US&page=${page}`)
            setTv(res.data.results)
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    }

    // Get Data Api Movies By Id
    const getDataById = async (id) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/3/movie/${id}?api_key=${import.meta.env.VITE_PUBLIC_API_SECRET_KEY}&language=en-US`)
            setDataId(res.data)
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDataById(324544)
    }, []);


    // UseEffect 
    useEffect(() => {
        getDataMovies()
        getDataTv()
        getNowMovies()
    }, [page])




    return <AuthContext.Provider value={{ setPage, page, movies , tv , naw }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext)
