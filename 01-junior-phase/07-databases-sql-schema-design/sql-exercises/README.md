# PostgreSQL Exercises

<sup>Reference: [pgexercises.com](https://pgexercises.com/)</sup>

## **Setting up**

**1. Create database**

- Options:
  - Running the command `createdb sql_exercises` in the terminal.
    - PostgreSQL documentation: [createdb](https://www.postgresql.org/docs/9.1/app-createdb.html)
  - Using `psql` command line interface, run `CREATE DATABASE sql_exercises;` then check that it was created successfully by running, `SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('sql_exercises');`, **OR** by looking at the databases in a GUI like Postico.
    - To exit `psql`, type `\q` and press enter.
    - PostgreSQL documentation: [CREATE DATABASE](https://www.postgresql.org/docs/9.0/sql-createdatabase.html)
  - Using a GUI like Postico. Interfaces vary, but it should be user-friendly enough as to click a `+Database` button and type in the database name, `sql_exercises`.

**2. Run seed**

- `npm run seed` in your terminal.
  - See the `package.json` file to see what this command runs:
    - `"seed": "psql -d sql_exercises -a -f ./clubdata.sql"`
      - `-d [dbname]`: short for `--dbname=dbname`, the database name to connect to
      - `-a`: short for `--echo-all`, prints all nonempty input lines to std output
      - `-f [filename]`: short for `--file=filename`, reads commands from the filename

**3. Code away!**

- Use a GUI (e.g. Postico) to write and test your SQL queries.
