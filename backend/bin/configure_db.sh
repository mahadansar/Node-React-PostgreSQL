#!/bin/bash

echo "Configuring Database"

psql

DROP DATABASE dragonstackdb;
CREATE DATABASE dragonstackdb;

psql -U node_user dragonstackdb < .bin/sql/generation.sql
psql -U node_user dragonstackdb < .bin/sql/dragon.sql
psql -U node_user dragonstackdb < .bin/sql/trait.sql
psql -U node_user dragonstackdb < .bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo "Database Configured"