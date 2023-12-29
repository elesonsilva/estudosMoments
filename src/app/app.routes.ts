import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentsComponent } from './components/pages/edit-moments/edit-moments.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'new-moment', component:NewMomentComponent},
    {path:'moments/edit/:id',component:EditMomentsComponent},
    {path:'moments/:id', component:MomentComponent},
];
