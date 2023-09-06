import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryServiceService } from '../library.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-library',
  templateUrl: './create-library.component.html',
  styleUrls: ['./create-library.component.css']
})
export class CreateLibraryComponent implements OnInit {

  book: Book = new Book ();
  constructor(private libraryService: LibraryServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CreateBook(){
    this.libraryService.saveBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
  
  onSubmit(){
    console.log(this.book);
    this.CreateBook();
  }
  goBack():void{
    this.router.navigate(['/books']);
  }
}
