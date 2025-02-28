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
        String insert = "insert into app_id values ('customerid', ?)";
        return checkAndInsert(select, insert, customerId);
    }

    public boolean insertAccountId(String accountId) {
        String select = "select count(*) from app_id where id_type = 'accountid' and id_value = ?";
        String insert = "insert into app_id values ('accountid', ?)";
        return checkAndInsert(select, insert, accountId);
    }

    private boolean checkAndInsert(String select, String insert, String newId) {
        int found = jdbcClient.sql(select).param(newId).query(Integer.class).single();
        if (found > 0) {
            return false;
        } else {
            int count = jdbcClient.sql(insert).param(newId).update();
            return count == 1;
        }
    }

}