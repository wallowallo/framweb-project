import { RouterModule, Routes } from '@angular/router';

import { HjemComponent } from '../hjem/hjem.component';
import { SmsComponent } from '../sms/sms.component';

const appRoutes: Routes = [
  { path: '', component: HjemComponent },
  { path: 'sms',  component:  SmsComponent},
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
