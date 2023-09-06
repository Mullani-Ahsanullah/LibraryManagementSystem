import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { LibraryServiceService} from '../library.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId: number = 0;
  book: any = [];
  isPublished:boolean=false;
  status:string='';
  constructor(private route: ActivatedRoute, private libraryService: LibraryServiceService,private router: Router) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.book = new Book();
    this.libraryService.getBookById(this.bookId).subscribe( data => {
      this.book = data;
      if(this.book.isPublished==true)
    {
       this.status='Published'
    }
    else
    {
      this.status='UnPublished'
    }
    });
  }
  goBack():void{
    this.router.navigate(['/books']);
  }

  addBooking(bookId?:number){
  if(this.book.isPublished == true)
    {
      this.router.navigate(['lend-now',this.bookId]);
    }
  else{
    alert('You Can Not Lend UnPublished Book')
  }
}
}
