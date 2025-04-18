import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useAuthContext } from '../../Context/context';
import { useParams } from 'react-router';
import Loading from '../../Components/Loading';

const Movie = () => {
    const { post, setPostId , loadingId } = useAuthContext()
    const { id } = useParams();


    // Create details movie page id
    useEffect(() => {
        if (id) {
            setPostId(id)
        }
    }, [id]);


    // Set Loading 
    if (loadingId) return <Loading/>

    return (
        <>
            <Header />
            <div className="flex">
                <div className="container mx-auto px-4 py-22">
                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="w-full   max-w-3x mx-auto rounded-xl overflow-hidden shadow-lg">
                                <video
                                    controls
                                    poster={`${import.meta.env.VITE_PUBLIC_IMAGE_BASE_URL}/t/p/original/${post?.backdrop_path}`}
                                    className="w-full h-auto rounded-xl"
                                >
                                    <source src="/public/video.mp4" type="video/mp4" media="(min-width: 1024px)" />
                                    <source src="/public/video.mp4" type="video/mp4" media="(min-width: 768px)" />
                                    <source src="/public/video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="my-4 px-2">
                            <h3 className="text-4xl font-semibold mb-4">{post?.title}.</h3>
                            <p className="text-gray-600 mb-4">Movie Description</p>
                            <p className="text-gray-600 mb-4">Release Date: 2023</p>
                            <p className="text-gray-600 mb-4">Runtime: 120 minutes</p>
                            <p className="text-gray-600 mb-4">Director: John Doe</p>
                            <p className="text-gray-600 mb-4">Cast: Actor 1, Actor 2, Actor 3</p>
                            <p className="text-gray-600 mb-4">Genre: Action, Thriller</p>
                            <p className="text-gray-600 mb-4">Language: English</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Movie;
