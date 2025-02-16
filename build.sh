#!/bin/bash
cd front
npm run build
rm -rf ../back/src/main/resources/static
mv out ../back/src/main/resources/static
