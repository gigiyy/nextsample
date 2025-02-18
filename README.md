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
## release steps

run below script
```sh
./build.sh
```
use the create fat jar file `app.jar` for release