export interface IMovieApi {
    page: number,
    results:[IMovieApiResult];
}

export interface IMovieApiResult{
        json(): void;
        adult:boolean;
        backdrop_path: string;
        genre_ids:[],
        id:number;
        original_language:string;
        original_title: string;
        overview: string;
        popularity:number;
        poster_path:string;
        release_date:number;
        title:string;
        video:boolean;
        vote_average:number;
        vote_count:number;  
        marginLeft: number;
}