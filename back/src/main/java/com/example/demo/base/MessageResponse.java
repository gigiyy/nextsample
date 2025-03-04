package com.example.demo.base;

import java.util.List;

public interface MessageResponse<T extends MessageResponse<T>> {

    List<Message> getMessages();

    T self();

    default T ok(String message) {
        getMessages().add(new Message(Message.Type.OK, message));
        return self();
    }

    default T warn(String message) {
        getMessages().add(new Message(Message.Type.WARN, message));
        return self();
    }

    default T error(String message) {
        getMessages().add(new Message(Message.Type.ERROR, message));
        return self();
    }
}