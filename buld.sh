#!/bin/bash
cd front
npm run build
rmdir -f ../back/src/main/resources/static
mv out ../back/src/main/resources/static
