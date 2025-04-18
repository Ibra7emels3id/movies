import React from 'react';
import Header from '../../Components/Header';
import Hero from './_components/Hero';
import TrendingMovies from './_components/TrendingMovies';
import NewReleases from './_components/NewReleases';
import Tv from './_components/Tv';
import NowPlaying from './_components/NowPlaying';
import Footer from '../../Components/Footer';

const Home = () => {
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
