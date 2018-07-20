import { RouterModule, Routes } from '@angular/router';
import { YapenListComponent } from './yapen-list.component';

const AppRoutes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'list', component: YapenListComponent},
  // { path: '**', redirectTo: '/app', pathMatch: 'full' }
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
