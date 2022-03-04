import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadRoutingModule } from "./lazy-loaded-routing.module";
import { HomeComponent } from "src/app/shared/components";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        LazyLoadRoutingModule,
    ],
})
export class LazyLoadModule{}