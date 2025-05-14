## Migrating data from postgreSQL to mySQL

# 1. Run the environment

Execute command: `docker-compose up -d`

# 2. Verify database integrity

Run command to connect to postgres db:

``psql -h localhost -p 5433 -U postgres_user -d postgres_demo``

Password: postgres_password

Check tables with: `\l`

Select data from a table e.g: `SELECT * FROM movies;`

It should return the data from the table.


Run command to connect to mySQL db:

`mysql -h 127.0.0.1 -P 3309 -u mysql_user -p mysql_demo`

Password: mysql_password

Check tables: `show tables;`

Select data: `SELECT * FROM movies`

Should not return any data.

# 3. Run migration script

(Install dependencies with `npm i`)

Run the migration script using `node mysqlMigration.js`

# 4. Verify migration

Connect to mysql db: 

`mysql -h 127.0.0.1 -P 3309 -u mysql_user -p mysql_demo`

Check tables: `show tables;`

Verify data has been migrated:

`SELECT * FROM movies;`

This should return the data from postgres.
