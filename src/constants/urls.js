
const baseURL = 'https://api.themoviedb.org';

const postersURL = 'https://image.tmdb.org/t/p/original/';

const urls = {
    getGenres:'/3/genre/movie/list',
    getMovies:'/3/discover/movie',
    getMoviesByGenres:'/3/discover/movie?with_genres=',
    topRatedMovies:'/3/movie/top_rated',
    getSimilar:'/3/movie/',
    getMovie:'/3/movie/',
    search:'/3/search/movie?&query='

};

export {
    baseURL,
    urls,
    postersURL
}

// https://api.themoviedb.org/3/search/movie?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&query=lord%20of%20the%20rings&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/288?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US

// https://api.themoviedb.org/3/discover/movie