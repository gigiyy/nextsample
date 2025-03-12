package com.example.demo.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HtmlController {

    @RequestMapping("/{page:^(?!.*[.].*$).*$}")
    public String requestMethodName(@PathVariable("page") String page) {
        String htmlPage = "/" + page + ".html";
        log.info("forwarding request to {}", htmlPage);
        return htmlPage;
    }

}
