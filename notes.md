## References

how to deploy static `next.js` application with `spring boot`

https://stacktobasics.com/deploy-nextjs-with-spring-boot

security

https://baubaubau.hatenablog.com/entry/2021/03/03/210944

CSRF

https://docs.spring.io/spring-security/reference/servlet/integrations/mvc.html#mvc-csrf-resolver

Self signed certificate

```sh
keytool -genkeypair -alias springboot -keyalg RSA -keysize 4096 -keystore springboot.p12 -validity 3650 -storepass password
```

## keycloak

```sh
docker run --name keycloak -d -p 8090:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.1.2 start-dev
```

https://developers.redhat.com/articles/2023/07/24/how-integrate-spring-boot-3-spring-security-and-keycloak#

## OAuth2 Spring boot

https://spring.io/blog/2023/08/22/tackling-the-oauth2-client-component-model-in-spring-security

## Multiple Connectors for Tomcat

https://docs.spring.io/spring-boot/how-to/webserver.html#howto.webserver.enable-multiple-connectors-in-tomcat
