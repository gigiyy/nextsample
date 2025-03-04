package com.example.demo.dtr;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.base.Message;
import com.example.demo.base.MessageResponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CashPostingStatus implements MessageResponse<CashPostingStatus> {

    private LocalDate cobDate;
    private char triggerFlag;
    protected List<Message> messages = new ArrayList<>();

    @Override
    public CashPostingStatus self() {
        return this;
    }
}
