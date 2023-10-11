import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipesPipe } from './pipe/custompipe.pipe';
import { FilterpipePipe } from './pipe/filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { MobilenumFormatpipeComponent } from './components/mobilenum-formatpipe/mobilenum-formatpipe.component';
import { NumformatPipe } from './pipes/numformat.pipe';
import { JsondataComponent } from './components/jsondata/jsondata.component';
import { JsondatapipePipe } from './pipes/jsondatapipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustompipesPipe,
    FilterpipePipe,
    MobilenumFormatpipeComponent,
    NumformatPipe,
    JsondataComponent,
    JsondatapipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
