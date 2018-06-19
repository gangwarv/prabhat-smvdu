import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const loginRoutes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component:LoginComponent }
        ]
    }
]