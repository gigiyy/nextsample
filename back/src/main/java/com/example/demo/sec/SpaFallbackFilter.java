package com.example.demo.sec;

import java.io.IOException;

import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SpaFallbackFilter implements Filter {
    private static final String INDEX_PAGE = "/index.html";
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
          throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        String path = request.getServletPath();
        // If the path does not contain a dot and is not an API endpoint, forward to index.html
        if (!path.contains(".") && !path.startsWith("/api/")) {
            request.getRequestDispatcher(INDEX_PAGE).forward(request, response);
            return;
        }
        chain.doFilter(req, res);
    }
}

