package com.example.demo.dtr;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.base.RecordNotfoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/dtr")
public class DtrController {

    @Autowired
    private DtrService dtrService;

    @GetMapping("/cashPosting")
    public CashPostingStatus getMethodName(@RequestParam Optional<LocalDate> cobDate) {
        log.info("getting cash posting status for cobDate: {}", cobDate.orElse(LocalDate.now()));
        return dtrService.getCashPosting(cobDate.orElse(LocalDate.now()))
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
    }

    @PutMapping("/cashPosting")
    public CashPostingStatus enableCashPosting(@RequestParam LocalDate cobDate) {
        log.info("enabling cash posting for cobDate: {}", cobDate);
        CashPostingStatus result = dtrService.enableCashPosting(cobDate)
                .orElseThrow(() -> new RecordNotfoundException("No record for the specified COB Date!"));
        return result.ok("Cash posting updated for " + cobDate);
    }

}
