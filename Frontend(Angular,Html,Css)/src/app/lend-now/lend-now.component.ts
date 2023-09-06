import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Book } from '../book';
import { MailServiceService } from '../mail-service.service';
import { HttpClient } from '@angular/common/http';
import { LibraryServiceService } from '../library.service.service';

@Component({
  selector: 'app-lend-now',
  templateUrl: './lend-now.component.html',
  styleUrls: ['./lend-now.component.css']
})
export class LendNowComponent implements OnInit{
  bookId: number=0;
  user: User = new User(); 
  formattedDate!: string;
  userEmail: string="";
  book: Book = new Book;

  constructor(private userservice: UserService,private route: ActivatedRoute,
    private router: Router, private emailservice:MailServiceService, private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.formattedDate = this.getFormattedDate();
}
    AddTableBook(){
      this.userservice.addBooking(this.user, this.bookId).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
    }

    private getFormattedDate(): string {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    mailchecking(){
      this.book = new Book();
      this.libraryService.getBookById(this.bookId).subscribe( data => {
        this.book = data;
        console.log(this.book);
      });
        this.emailservice.checkEmail(this.user.userEmail, this.book).subscribe(data => {
          console.log(data);
        },
        error => console.log(error));
    }
  
    onSubmit(){
      this.AddTableBook();
      console.log("add user data to the user table... booking sucesful mail should to gooo");
      console.log(this.user.userEmail);
        if (this.user.userEmail) {
          this.mailchecking();
          alert('Book Lended Successfully plz check the E-Mail');
          this.router.navigate(['/books']);
        } else {
          console.log('userEmail is null, cannot make API request.');
    }
  }
}