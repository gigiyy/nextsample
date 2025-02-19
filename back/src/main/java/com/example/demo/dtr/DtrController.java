package com.example.demo.dtr;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.RecordNotfoundException;

@RestController
@RequestMapping("/dtr")
public class DtrController {

    @Autowired
    private DtrService dtrService;

    @GetMapping("/cashPosting")
    public CashPostingStatus getMethodName(@RequestParam Optional<LocalDate> cobDate) {
        return dtrService.getCashPosting(cobDate.orElse(LocalDate.now()))
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
    }

    @PutMapping("/cashPosting")
    public CashPostingStatus enableCashPosting(@RequestParam LocalDate cobDate) {
        return dtrService.enableCashPosting(cobDate)
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
    }

}
