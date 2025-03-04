package com.example.demo.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.base.ResultMsg;

@RestController
@RequestMapping("/api/car")
public class CounterPartyController {

    @Autowired
    private CarServices carServices;

    @PostMapping("/counterParty")
    public ResultMsg addCustomerId(@RequestBody CounterPartyInfo info) {
        ResultMsg results = new ResultMsg();
        String customerId = info.getCustomerId();
        if (StringUtils.hasLength(customerId)) {
            results.insertResult(carServices.insertCustomerId(info.getCustomerId()), "Customer ID " + customerId);
        }
        String accountId = info.getAccountId();
        if (StringUtils.hasLength(accountId)) {
            results.insertResult(carServices.insertAccountId(info.getAccountId()), "Account ID " + accountId);
        }
        return results;
    }

}
