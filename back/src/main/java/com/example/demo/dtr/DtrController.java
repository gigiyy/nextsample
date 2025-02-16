package com.example.demo.dtr;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.RecordNotfoundException;

import io.micrometer.common.lang.Nullable;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/dtr")
public class DtrController {

    @Autowired
    private DtrService dtrService;

    @GetMapping("/cashPosting")
    public CashPostingStatus getMethodName(@RequestParam @Nullable LocalDate cobDate) {
        if (cobDate == null) {
            cobDate = LocalDate.now();
        }
        return dtrService.getCashPosting(cobDate)
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
    }

    @PutMapping("/cashPosting")
    public CashPostingStatus enableCashPosting(@RequestParam LocalDate cobDate) {
        return dtrService.enableCashPosting(cobDate)
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
    }

}
