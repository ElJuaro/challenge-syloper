/* import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import * as componentes from './components';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    declarations:[
        componentes.CardsComponent, 
        componentes.CarouselComponent, 
        componentes.HeaderComponent, 
        componentes.FooterComponent, 
        componentes.HomeComponent
    ],
    exports:[
        FormsModule,
        CommonModule,
        RouterModule,
        ...componentes.components

    ]
})
export class SharedModule{} */