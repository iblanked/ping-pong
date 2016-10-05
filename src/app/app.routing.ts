import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { RxJsComponent } from './rxjs/rxjs.component';
import { WelcomeComponent } from './welcome.component';

const appRoutes: Routes = [
  { path: 'http', component: HttpComponent },
  { path: 'rxjs', component: RxJsComponent },
  { path: '', component: WelcomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
