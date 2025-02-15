package com.example.demo;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CashPostingStatus {

    private LocalDate cobDate;
    private char triggerFlag;
}
