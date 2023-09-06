import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateLibraryComponent } from './create-library/create-library.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';
import { FeedbackComponent } from './feedback/feedback.component';
import{UserComponent} from './user/user.component';
import { LendNowComponent } from './lend-now/lend-now.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'create-library', component: CreateLibraryComponent,canActivate:[AuthGaurdServiceService]},
  {path: '', redirectTo: 'book', pathMatch: 'full'},
  {path: 'update-book/:bookId', component: UpdateBookComponent},
  {path: 'book-details/:bookId', component: BookDetailsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'user/:bookId', component: UserComponent,canActivate:[AuthGaurdServiceService]},
  {path:'lend-now/:bookId',component:LendNowComponent},
  { path:'create-author',component:CreateAuthorComponent,canActivate:[AuthGaurdServiceService]},
  {path:'author-list',component:AuthorListComponent,canActivate:[AuthGaurdServiceService]},
  {path:'author-details/:authorId',component:AuthorDetailsComponent},
  {path:'update-author/:authorId',component:UpdateAuthorComponent},
  {path:'authors',component:AuthorListComponent,canActivate:[AuthGaurdServiceService]},
  {path:'view-book/:authorId',component:ViewBookComponent,canActivate:[AuthGaurdServiceService]},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
