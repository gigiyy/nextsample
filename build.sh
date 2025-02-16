#!/bin/bash
cd front
npm run build
rm -rf ../back/src/main/resources/static
mv out ../back/src/main/resources/static

cd ../back
mvn clean install
mv target/demo*.jar ../app.jar
