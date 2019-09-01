#!/bin/bash

dropdb -U node_user dragonstackdb < .bin/sql/generation.sql
createdb -U node_user dragonstackdb < .bin/sql/dragon.sql

psql -U node_user dragonstackdb