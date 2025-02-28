package com.example.demo.car;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CounterPartyInfo {
    @Nullable
    private String customerId;
    @Nullable
    private String accountId;
}
