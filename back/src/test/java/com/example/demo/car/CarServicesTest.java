package com.example.demo.car;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.simple.JdbcClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class CarServicesTest {
    @Autowired
    JdbcClient jdbcClient;
    @Autowired
    CarServices subject;

    @Test
    void testInsertAccountId() {
        String accountId = "123";
        assertThat(subject.insertAccountId(accountId)).isTrue();
        assertThat(subject.insertAccountId(accountId)).isFalse();
    }

    @Test
    void testInsertCustomerId() {

    }
}
