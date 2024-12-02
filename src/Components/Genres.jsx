import "./Genres.css";

function renderMoviesInGenre(genreId) {

}

function GenresList() {
    let genresList = [{ "genreName": "Action", "id": 28 },
    { "genreName": "Adventure", "id": 12 },
    { "genreName": "Animation", "id": 16 },
    { "genreName": "Fantasy", "id": 14 },
    { "genreName": "Science Fiction", "id": 878 },
    { "genreName": "War", "id": 10752 },
    { "genreName": "Comedy", "id": 35 },
    { "genreName": "Mystery", "id": 9648 },
    { "genreName": "Western", "id": 37 },
    { "genreName": "Family", "id": 10751 },
    { "genreName": "Tv Movie", "id": 10770 },]

    return (
        <div className="genreList">
            <h1 className="genreTitle">Genres</h1>
            <ul className="itemList">
                {genresList.map((genre) => (
                    <li key={genre.id} className="item">{genre.genreName}</li>
                ))}
            </ul>
        </div>
    )
}

export default GenresList

// {
//     movies.map((movie) => (
//         <div key={movie.id} className="movie-card" onClick={() => { loadMovie(movie.id) }}>
//             <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-poster"
//             />
//         </div>
//     ))
// }