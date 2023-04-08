package com.example.hotelbooking.exceptions;

public class BadRequest extends Exception {

    public BadRequest (String mensaje){
        super(mensaje);
    }

}