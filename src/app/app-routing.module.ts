import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: '',
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallary/gallary.module').then(m => m.GallaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
