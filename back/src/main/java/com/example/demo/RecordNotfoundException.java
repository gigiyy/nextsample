package com.example.demo;

public class RecordNotfoundException extends RuntimeException {
    public RecordNotfoundException(String message) {
        super(message);
    }
}
