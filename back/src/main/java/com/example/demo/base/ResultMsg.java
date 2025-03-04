package com.example.demo.base;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResultMsg implements MessageResponse<ResultMsg> {

    protected List<Message> messages = new ArrayList<>();

    @Override
    public ResultMsg self() {
        return this;
    }

    public void insertResult(boolean result, String item) {
        if (result) {
            ok(item + " inserted");
        } else {
            error(item + " already exists, or insert failed");
        }
    }

}
