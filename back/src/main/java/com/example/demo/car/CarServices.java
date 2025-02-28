package com.example.demo.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

@Service
public class CarServices {

    @Autowired
    private JdbcClient jdbcClient;

    public boolean insertCustomerId(String customerId) {
        String select = "select count(*) from app_id where id_type = 'customerid' and id_value = ?";
        int found = jdbcClient.sql(select).param(customerId).query(Integer.class).single();
        if (found > 0) {
            return false;
        }
        String insert = "insert into app_id values ('customerid', ?)";
        int count = jdbcClient.sql(insert).param(customerId).update();
        return count == 1;
    }

    public boolean insertAccountId(String accountId) {
        String select = "select count(*) from app_id where id_type = 'accountid' and id_value = ?";
        int found = jdbcClient.sql(select).param(accountId).query(Integer.class).single();
        if (found > 0) {
            return false;
        }
        String insert = "insert into app_id values ('accountid', ?)";
        int count = jdbcClient.sql(insert).param(accountId).update();
        return count == 1;
    }

}