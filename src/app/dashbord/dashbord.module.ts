import { NgModule } from '@angular/core';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashbordComponent],
  imports: [
    DashbordRoutingModule,
    SharedModule
  ]
})
export class DashbordModule { }
