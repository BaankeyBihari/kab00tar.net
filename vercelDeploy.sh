#!/bin/bash

sed -i "s|\"appDir\":\"/[a-zA-Z0-9/_-]*\",|\"appDir\":\"$(pwd)\",|g" .next/required-server-files.json

cat .next/required-server-files.json
echo