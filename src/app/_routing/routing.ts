import { RouterModule, Routes } from '@angular/router';

import { HjemComponent } from '../hjem/hjem.component';
import { OvelseComponent } from '../ovelse/ovelse.component';
import { ReelComponent } from '../reel/reel.component';

const appRoutes: Routes = [
  { path: '', component: HjemComponent },
  { path: 'øvelse',  component:  OvelseComponent},
  { path: 'reel',  component:  ReelComponent},
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
