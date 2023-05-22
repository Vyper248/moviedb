type FetchOptions = {
    method: string;
    headers: {[key: string]: string};
    body: string;
}

export const customFetch = async (url: string, options?: FetchOptions) => {
    let baseOptions = {
        headers: {'Authorization': `Bearer ${process.env.MOVIEDB_API}`}
    }

    let fetchOptions = options !== undefined ? {...baseOptions, ...options} : baseOptions;

    try {
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        return data;
    } catch (err) {
        let message = 'Unknown Error';
        if (err instanceof Error) message = err.message;
        return {success: false, status_message: message};
    }
}

export const getMovies = async (type = 'now_playing', page = 1) => {
    let movies = await customFetch(`https://api.themoviedb.org/3/movie/${type}?language=en&page=${page}`);
    return movies;
}

export const getMovie = async (id: string) => {
    let movie = await customFetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=images,credits,videos,reviews&language=en`);
    return movie;
}

export const searchMovies = async (text: string) => {
    let searchedMovies = await customFetch(`https://api.themoviedb.org/3/search/movie?query=${text}&language=en`);
    return searchedMovies;
}