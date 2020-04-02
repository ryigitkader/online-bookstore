package com.yigitkader.onlinebookstore.repository;

import com.yigitkader.onlinebookstore.entity.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "bookCategory",path = "book-category")
public interface IBookCategoryRepository extends JpaRepository<BookCategory,Long> {


}
