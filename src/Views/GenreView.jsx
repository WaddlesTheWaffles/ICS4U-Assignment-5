import "./GenreView.css"
import { useState, useEffect } from "react";
import axios from "axios";

function GenreView() {
    const [movies, setMovies] = useState([]);
    const [moviesFetched, setMoviesFetch] = useState(false);

    useEffect(() => {
        (async function getMovies() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error("ERROR in fetching movies", error);
            }
        })();
    }, []);

    function renderMoviePosters() {
        if (movies.length <= 19) {
            return null

        } else {
            return (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id} className="moviePosterInGenre">
                            <div className="posterContainerInGenre">
                                <img
                                    src={movie.poster_path ?
                                        `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                                        : `https://placehold.co/300x450?text=Movie+Poster+Unavailable`}
                                    alt={movie.title}
                                />
                            </div>
                            <h1 className="titleInGenre">{movie.title}</h1>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div>
            {renderMoviePosters()}
        </div>
    )
}

export default GenreView