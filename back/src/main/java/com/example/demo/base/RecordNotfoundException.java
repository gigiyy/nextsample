package com.example.demo.base;

public class RecordNotfoundException extends RuntimeException {
    public RecordNotfoundException(String message) {
        super(message);
    }
}
