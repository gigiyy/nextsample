package com.example.demo.dtr;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class DtrService {

    private final JdbcClient jdbcClient;

    String update = "Update cash_posting set trigger_flag = 'Y' where cob_date = ?";
    String select = "Select cob_date, trigger_flag from cash_posting where cob_date = ?";

    DtrService(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public Optional<CashPostingStatus> getCashPosting(LocalDate cobDate) {
        Optional<CashPostingStatus> result =jdbcClient.sql(select).param(cobDate).query(CashPostingStatus.class).optional();
        log.info("{}", result);
        return result;
    }

    public Optional<CashPostingStatus> enableCashPosting(LocalDate cobDate) {
        jdbcClient.sql(update).param(cobDate).update();
        Optional<CashPostingStatus> result =jdbcClient.sql(select).param(cobDate).query(CashPostingStatus.class).optional();
        log.info("{}", result);
        return result;
    }
}