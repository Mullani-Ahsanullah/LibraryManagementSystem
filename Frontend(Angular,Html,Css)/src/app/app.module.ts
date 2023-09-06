import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateLibraryComponent } from './create-library/create-library.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserComponent } from './user/user.component';
import { LendNowComponent } from './lend-now/lend-now.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent ,
    CreateLibraryComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    LoginComponent,
    LogoutComponent,
    FeedbackComponent,
    UserComponent,
    LendNowComponent,
    CreateAuthorComponent,
    UpdateAuthorComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    ViewBookComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
