#!/bin/bash

echo "Configuring Database"

psql

DROP DATABASE dragonstackdb;
CREATE DATABASE dragonstackdb;


CREATE TABLE account(id SERIAL PRIMARY KEY, "usernameHash" CHARACTER(64), "passwordHash" CHARACTER(64));

CREATE TABLE generation ( id SERIAL PRIMARY KEY, expiration TIMESTAMP NOT NULL );

CREATE TABLE dragon( id SERIAL PRIMARY KEY, birthdate TIMESTAMP NOT NULL, nickname VARCHAR(64), "generationId" INTEGER, FOREIGN KEY ("generationId") REFERENCES generation(id) );

CREATE TABLE trait(id SERIAL PRIMARY KEY, "traitType" VARCHAR NOT NULL, "traitValue" VARCHAR NOT NULL);

CREATE TABLE dragonTrait("traitId" INTEGER, "dragonId" INTEGER, FOREIGN KEY ("traitId") REFERENCES trait(id), FOREIGN KEY ("dragonId") REFERENCES dragon(id) );


node ./bin/insertTraits.js

echo "Database Configured"