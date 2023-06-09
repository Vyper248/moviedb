export type Genre = {
    id: number;
    name: string;
}

export type Actor = {
    id: string;
    name: string;
    character: string;
    profile_path: string;
}

export type Image = {
    file_path: string;
}

export type Review = {
    id: string;
    url: string;
    author: string;
    author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
    },
    content: string;
    created_at: string;
}

export type Video = {
    name: string;
    key: string;
    site: string;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export type Movie = {
    id: number;
    backdrop_path: string;
    genres: Genre[];
    release_date: string;
    runtime: number;
    status: string;
    title: string;
    vote_average: number;
    homepage: string;
    original_title: string;
    overview: string;
    poster_path: string;
    images: {
        backdrops: Image[];
        logos: Image[];
        posters: Image[];
    }
    reviews: {
        page: number;
        results: Review[];
    }
    credits: {
        cast: Actor[];
    }
    videos: {
        results: Video[];
    }
}

export type Movies = {
    dates: {
        maximum: string;
        minimum: string;
    },
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[];
}