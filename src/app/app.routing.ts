import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  // { path: '**', component: AppComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});
