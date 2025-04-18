import React from 'react';
import Header from '../../Components/Header';
import Hero from './_components/Hero';
import TrendingMovies from './_components/TrendingMovies';
import NewReleases from './_components/NewReleases';
import Tv from './_components/Tv';
import NowPlaying from './_components/NowPlaying';
import Footer from '../../Components/Footer';
import { useAuthContext } from '../../Context/context';
import Loading from '../../Components/Loading';

const Home = () => {
    const { loading } = useAuthContext()



    // Set Loading
    if (loading) return <Loading />

    return (
        <>
            <Header />
            <Hero />
            <TrendingMovies />
            <Tv />
            <NowPlaying />
            <NewReleases />
            <Footer />
        </>
    );
}

export default Home;
