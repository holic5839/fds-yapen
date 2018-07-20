import { RouterModule, Routes } from '@angular/router';

import { YapenContainerComponent } from './yapen-container.component';
import { YapenSearchbarComponent } from './yapen-searchbar.component';
import { YapenListComponent } from './yapen-list.component';
import { YapenReserveComponent } from './yapen-reserve.component';
import { YapenPayComponent } from './yapen-pay.component';
import { YapenPayfinishComponent } from './yapen-payfinish.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
  { path: 'main',  component: YapenSearchbarComponent, }, // url 경로가 main 일때 YapenSearchbarComponent 를 보여준다.
  { path: 'container', component: YapenContainerComponent, },
  { path: 'list', component: YapenListComponent, },
  { path: 'reserve', component: YapenReserveComponent, },
  { path: 'pay', component: YapenPayComponent, },
  { path: 'payfinish', component: YapenPayfinishComponent, },
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
