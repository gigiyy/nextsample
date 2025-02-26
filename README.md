# Simple static Next.JS App

A sample application developed using below stack:

- frontend: next.js, built as static files
- backend: Spring boot, also serve the static UI
- keycloak: provide OIDC Authz requirements

## keycloak

run keycloak container and setup realm and clients.

## development

we'll run front and back separately, so that we can harness the live-reload features of both.

`dev` profile was used to disable or enable some of the features for the conveniences of development and testing
- spring security was disabled as the authentication and authorization model would be different(?need confirm)
- additional http connector at port 8080 is enabled along with https (8443)

run backend

```sh
cd back
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

run frontend

```sh
cd front
npm run dev
```

then make changes and see the changes takes effect in realtime.

## production build

at project root:

```sh
mvn [clean] install
cd back
mvn spring-boot:run
#or
java -jar back/target/back-0.0.1-SNAPSHOT.jar
```

use the create fat jar file `app.jar` for release

keep in mind to set the environment variables according to `env.template` file
