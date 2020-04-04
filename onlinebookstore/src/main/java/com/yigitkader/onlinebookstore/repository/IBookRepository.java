package com.yigitkader.onlinebookstore.repository;

import com.yigitkader.onlinebookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:8081") //permisson for get request to angular | ('*' is give permission for any request)
public interface IBookRepository extends JpaRepository<Book,Long> {


}
