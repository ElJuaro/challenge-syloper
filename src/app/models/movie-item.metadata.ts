export interface IMovieApi {
    page: number,
    results:[IMovieApiResult];
}

export interface IMovieApiResult{
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

export interface IMovieCredit{
    id: number,
    cast:[];
}

export interface IMovieCreditCast{
    adult: boolean,
    gender: number,
    id: number,
    known_for_department:  string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number

}