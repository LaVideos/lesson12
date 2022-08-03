import {axiosService} from "../index";
import {apiKey, language, urls} from "../../constants";

const params = {
    api_key: `${apiKey}`,
    language: `${language}`,
}


export const movieDBService = {
    getAllMovies: (page = 1) => axiosService.get(urls.getMovies, {
        params: {
            params,
            page: page
        }
    }),
    getMoviesByGenreId: (id, page = 1) => axiosService.get(urls.getMoviesByGenres + id, {
        params: {
            params,
            page: page
        }
    }),
    topRatedMovies: () => axiosService.get(urls.topRatedMovies, {
        params: {
            params,
        }
    }),
    getRecommendation: (id) => axiosService.get(urls.getSimilar + `${id}/similar`, {
        params: {
           params
        }
    }),
    searchMovie:(title)=>axiosService.get(urls.search+title,{params:{
        params
        }})
}
// https://api.themoviedb.org/3/movie/616037/reviews?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&page=1 || rewiew


// https://api.themoviedb.org/3/movie/upcoming?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&page=1 || виходять



// https://api.themoviedb.org/3/movie/616037/similar?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&page=1
// https://api.themoviedb.org/3/movie/278/recommendations?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&page=1