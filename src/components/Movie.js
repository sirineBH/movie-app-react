import React from "react";
import { useParams } from "react-router";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//compoenents
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

//hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//image
import NoImage from '../images/no_image.jpg';

const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />

            <MovieInfo movie={movie} />
        </>
    )
};

export default Movie;