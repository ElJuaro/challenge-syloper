import { CardMovieComponent } from "./card-movie/card-movie.component";
import { CardsComponent } from "./cards/cards.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";

export const components: any[] = [
    CardsComponent,
    CardMovieComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent
]

export * from "./card-movie/card-movie.component";
export * from "./cards/cards.component";
export * from "./carousel/carousel.component";
export * from "./header/header.component";
export * from "./footer/footer.component"
export * from "./search/search.component"
