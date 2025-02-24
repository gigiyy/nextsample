# Simple static Next.JS App

A sample application developed using below stack:

- frontend: next.js, built as static files
- backend: Spring boot, also serve the static UI
- keycloak: provide OIDC Authz requirements

## keycloak

run keycloak container and setup realm and clients.

## development

run backend

```sh
cd back
mvn spring-boot:run
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
