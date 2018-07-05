import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannellistComponent } from './channellist/channellist.component';

const routes: Routes = [
    { path: '', redirectTo: 'channel', pathMatch: 'full' },
    { path: 'channel', component: ChannellistComponent },
    { path: '**', redirectTo: 'channel' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
