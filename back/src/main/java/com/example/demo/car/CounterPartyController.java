package com.example.demo.car;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/car")
public class CounterPartyController {

    @Autowired
    private CarServices carServices;

    @PostMapping("/counterParty")
    public InsertResults addCustomerId(@RequestBody CounterPartyInfo info) {
        InsertResults results = new InsertResults();
        String customerId = info.getCustomerId();
        if (StringUtils.hasLength(customerId)) {
            results.makeResult(carServices.insertCustomerId(info.getCustomerId()), "Customer ID " + customerId);
        }
        String accountId = info.getAccountId();
        if (StringUtils.hasLength(accountId)) {
            results.makeResult(carServices.insertAccountId(info.getAccountId()), "Account ID " + accountId);
        }
        return results;
    }

}
