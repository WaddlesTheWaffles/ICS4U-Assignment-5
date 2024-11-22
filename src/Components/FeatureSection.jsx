import "./FeatureSection.css"
import { useEffect, useState } from "react"
import axios from "axios"

function FeatureSection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            setMovies(response.data.results)
        })();
    }, [])
    // the [] is so it only runs once

    console.log(movies[2]) //test

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title} />
                </div>
            ))}
        </div>
    )
}

export default FeatureSection