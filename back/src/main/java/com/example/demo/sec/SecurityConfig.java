package com.example.demo.sec;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.client.registration.ClientRegistration.ProviderDetails;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.util.StringUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebSecurity
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
public class SecurityConfig {

    @Autowired
    JdbcClient jdbcClient;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/favicon.ico", "/css/**", "/js/**", "/images/**")
                        .permitAll()
                        .anyRequest().authenticated())
                .oauth2Login(
                        oauth2 -> oauth2
                                .userInfoEndpoint(info -> info.oidcUserService(oidcUserService(jdbcClient))))
                .logout(logout -> logout.logoutSuccessUrl("/"));
        return http.build();
    }

    public OAuth2UserService<OidcUserRequest, OidcUser> oidcUserService(JdbcClient jdbcClient) {
        OidcUserService delegate = new OidcUserService();
        return userRequest -> {
            OidcUser user = delegate.loadUser(userRequest);
            log.info("user: {}", user);
            String name = user.getPreferredUsername();
            String select = "select count(*) from user where user_id = ? and user_role = 'admin'";
            Set<GrantedAuthority> authorities = new HashSet<>();
            int count = jdbcClient.sql(select).param(name).query(Integer.class).single();
            if (count > 0) {
                authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            }
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
            ProviderDetails providerDetails = userRequest.getClientRegistration().getProviderDetails();
            String userNameAttributeName = providerDetails.getUserInfoEndpoint().getUserNameAttributeName();
            if (StringUtils.hasText(userNameAttributeName)) {
                user = new DefaultOidcUser(authorities, user.getIdToken(), user.getUserInfo(), userNameAttributeName);
            } else {
                user = new DefaultOidcUser(authorities, user.getIdToken(), user.getUserInfo());
            }
            log.info("user {}", user);
            return user;
        };
    }
}