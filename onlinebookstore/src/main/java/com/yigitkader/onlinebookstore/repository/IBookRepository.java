package com.yigitkader.onlinebookstore.repository;

import com.yigitkader.onlinebookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookRepository extends JpaRepository<Book,Long> {


}
