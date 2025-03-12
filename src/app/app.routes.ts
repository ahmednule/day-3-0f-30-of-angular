import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'', component: AppComponent
    },
    {
        path:"about", component:AboutComponent
    },
    {
        path:"contact", component:ContactComponent
    }
];
