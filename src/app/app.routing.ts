import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './http/http.component';

const appRoutes: Routes = [
  { path: 'http', component: HttpComponent },
  { path: '', component: HttpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
