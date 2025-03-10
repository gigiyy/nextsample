package com.example.demo.base;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class ControllerAdvices extends ResponseEntityExceptionHandler {

    private ResultMsg result(RuntimeException ex) {
        return new ResultMsg().error(ex.getMessage());
    }

    @ExceptionHandler({ RecordNotfoundException.class })
    protected ResponseEntity<Object> handleRecordNotFoundException(RecordNotfoundException ex, WebRequest req) {
        return handleExceptionInternal(ex, result(ex), new HttpHeaders(), HttpStatus.NOT_FOUND, req);
    }

    @ExceptionHandler({ DataAccessException.class })
    protected ResponseEntity<Object> handleDataAccessException(DataAccessException ex, WebRequest req) {
        return handleExceptionInternal(ex, result(ex), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, req);
    }

}
