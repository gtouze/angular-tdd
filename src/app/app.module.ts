import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { Author } from './entities/authors';
import { AuthorsService } from './service/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
  })
  ],
  providers: [AuthorsService, Author],
  bootstrap: [AppComponent]
})
export class AppModule { }
