package com.example.demo.base;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ConfigurationProperties(prefix = "spring.http")
public class AppProperties {

    private int port = 8080;
}
