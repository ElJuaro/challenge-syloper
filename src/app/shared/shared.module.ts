import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import * as componentes from './components';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule,
        HttpClientModule
    ],
    declarations:[...componentes.components],
    exports:[
        FormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ...componentes.components

    ]
})
export class SharedModule{}