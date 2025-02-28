package com.example.demo.car;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

@Getter
public class InsertResults {

    private List<String> success;
    private List<String> failure;

    public InsertResults() {
        success = new ArrayList<>();
        failure = new ArrayList<>();
    }

    public void addSuccess(String msg) {
        success.add(msg);
    }

    public void addFailure(String msg) {
        failure.add(msg);
    }

    public void makeResult(boolean result, String item) {
        if (result) {
            addSuccess(item + " inserted");
        } else {
            addFailure(item + " already exists, or insert failed");
        }
    }
}
