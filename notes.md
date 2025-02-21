## References

how to deploy static `next.js` application with `spring boot`

https://stacktobasics.com/deploy-nextjs-with-spring-boot

security

https://baubaubau.hatenablog.com/entry/2021/03/03/210944

## keycloak

```sh
docker run --name keycloak -d -p 8090:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.1.2 start-dev
```

