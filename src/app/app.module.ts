import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannellistComponent } from './channellist/channellist.component';
import { AppRoutingModule } from './app-routing.module';
import { GetDataService } from './services/get-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ChannellistComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [GetDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
