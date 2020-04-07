import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    private bookService:BookService,
    private activatedRoute:ActivatedRoute,
    private alertifyService:AlertifyService

  ) { }

  books:Book[] ;
  currentCategoryId:number;
  searchMode:boolean;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    });
    
  }



  listBooks(){


    this.searchMode = this.activatedRoute.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.handleSearchBooks();
    }else{
      this.handleListBooks();
    }

    

  }




  handleListBooks(){


    const hasCategoryId:boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = + this.activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 1;
    }

    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    )

  }

  handleSearchBooks(){

    const keyword:string = this.activatedRoute.snapshot.paramMap.get('keyword');
    this.bookService.searchBooks(keyword).subscribe(
      data => this.books = data
    );

  }

  addToCart(book){
    
    this.alertifyService.success(book.name + " added to cart");
    
  }



}
