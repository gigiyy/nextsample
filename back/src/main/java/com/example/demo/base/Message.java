package com.example.demo.base;

public record Message(Type type, String message) {
    public static enum Type {
        OK,
        WARN,
        ERROR
    }
}
