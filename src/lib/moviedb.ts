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

export const getMovies = async (type = 'now_playing') => {
    let movies = await customFetch('https://api.themoviedb.org/3/movie/now_playing');
    return movies;
}