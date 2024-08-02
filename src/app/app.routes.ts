import { Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:'',component:CatalogueComponent, pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent}
];
