package com.example.hotelbooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(BadRequest.class)
    public ResponseEntity<String> badRequestExc(BadRequest exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(exception.getMessage());
    }
    @ExceptionHandler(NotFound.class)
    public ResponseEntity<String> notFoundExc(NotFound exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
          .body(exception.getMessage());
    }

    @ExceptionHandler(EmailAlreadyExists.class)
    public ResponseEntity<String> emailAlreadyExistsException(EmailAlreadyExists exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
          .body(exception.getMessage());
    }

    @ExceptionHandler(Conflict.class)
    public ResponseEntity<String> conflict(Conflict exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
          .body(exception.getMessage());
    }

}