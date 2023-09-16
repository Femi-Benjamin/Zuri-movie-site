/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

// Reusable MovieCard component
const MovieCard = ({ movie }) => {
    return (
        <div className="w-[250px] h-auto py-3 px-3 bg-gray-5 font-sans shadow-md border border-gray-300">
            <img data-testid="movie-poster" className="mb-3" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />

            <p data-testid="movie-release-date" className="pb-2 text-[#9CA3AF] font-medium">
                Release Date: {movie.release_date}
            </p>
            <p data-testid="movie-title" className="pb-3 text-[#111827] text-[18px] font-semibold">
                Title: {movie.title}
            </p>
            {/* <p className="pb-2 text-[#9CA3AF] font-medium">
                Overview: {movie.overview}
            </p> */}
            <p className="pb-2 text-[#9CA3AF] font-medium">
                Average Vote: {movie.vote_average}
            </p>
            <p className="pb-2 text-[#9CA3AF] font-medium">
                Popularity: {movie.popularity}
            </p>
            <div className="flex gap-[34px] pb-3">
                {/* You can add images for IMDB and Rotten Tomatoes here */}
            </div>
            <p>
                {movie.genres && movie.genres.map((genre) => genre.name).join(', ')}
            </p>
        </div>
    );
}

// Define PropTypes for the MovieCard component
MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        popularity: PropTypes.number,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
    }).isRequired,
};

// export default MovieCard;

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Define the API endpoint URL with your API key
        const apiUrl =
            'https://api.themoviedb.org/3/discover/movie?api_key=633aac4755d73c44d094c6688340f1aa';

        // Fetch data from the API using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching movie data:', error);
            });
    }, []);

    return (
        <div>
            <div className="px-[95px] h-screen font-sans">
                <div className="flex items-center justify-between pt-24  pb-20">
                    <h1 className="text-[#000] text-[36px] font-semibold">Featured Movies</h1>

                    <button className="flex items-center gap-2">
                        <h1 className="text-[#BE123C] text-[18px] leading-[24px] font-normal ">
                            See more
                        </h1>
                        <img src="Chevron right.svg" alt="" />
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {/* Map through the list of movies and render a MovieCard for each one */}
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MovieList;