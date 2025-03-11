package com.example.demo.dtr;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.test.context.jdbc.Sql;

@JdbcTest
public class DtrServiceTest {
    DtrService subject;
    @Autowired
    JdbcClient jdbcClient;

    @BeforeEach
    void setUp() {
        subject = new DtrService(jdbcClient);
    }

    @Test
    @Sql(statements = "Insert into cash_posting (cob_date, trigger_flag) values ('2021-01-01', 'N')")
    void testEnableCashPostingWithExistingRecord() {
        LocalDate cobDate = LocalDate.of(2021, 1, 1);
        Optional<CashPostingStatus> result = subject.enableCashPosting(cobDate);
        assertThat(result).isPresent();
        assertThat(result.get().getTriggerFlag()).isEqualTo('Y');
    }

    @Test
    @Sql(statements = "Insert into cash_posting (cob_date, trigger_flag) values ('2021-01-01', 'N')")
    void testGetCashPosting() {
        Optional<CashPostingStatus> result = subject.getCashPosting(LocalDate.of(2021, 1, 1));
        assertThat(result).isPresent();
        assertThat(result.get().getTriggerFlag()).isEqualTo('N');
    }
}
