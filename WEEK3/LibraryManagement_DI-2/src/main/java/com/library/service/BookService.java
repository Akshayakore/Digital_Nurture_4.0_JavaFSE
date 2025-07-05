package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Dependency Injected: BookRepository set in BookService.");
    }

    public void addBook() {
        bookRepository.save();
        System.out.println("BookService: addBook() called.");
    }
}
