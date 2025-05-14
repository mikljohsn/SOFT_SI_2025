import mysql from 'mysql2/promise';
import { Client } from 'pg'
 
const psqlClientObject = {
  user: 'postgres_user',
  password: 'postgres_password',
  host: 'localhost',
  port: 5433,
  database: 'postgres_demo',
}



// Create the connection to database
const mysqlConnection = {
    host: '127.0.0.1',
    user: 'mysql_user',
    password: 'mysql_password',
    database: 'mysql_demo',
    port: 3309
  }

async function migrateData() {

  const psqlClient = new Client(psqlClientObject);
  

try {

  await psqlClient.connect();
  console.log('Connected to PostgreSQL database');
  const mysqlClient = await mysql.createConnection(mysqlConnection);

  // Select movies from PostgreSQL and insert into MySQL

  const pgQuery = 'SELECT * FROM movies';
  const res = await psqlClient.query(pgQuery);
  console.log('Selected movies from PostgreSQL');

  const mysqlQuery = 'INSERT INTO movies (id, title, release_year, genre, created_at) VALUES ?';
  const values = res.rows.map(row => [row.id, row.title, row.release_year, row.genre, row.created_at]);

  console.log('Prepared values for MySQL insert');

  await mysqlClient.query(mysqlQuery, [values]);

  console.log('Inserted movies into MySQL');

  // select actors from PostgreSQL and insert into MySQL

  const pgQueryActors = 'SELECT * FROM actors';
  const resActors = await psqlClient.query(pgQueryActors);

  const mysqlQueryActors = 'INSERT INTO actors (id, name, birth_year, created_at) VALUES ?';
  const valuesActors = resActors.rows.map(row => [row.id, row.name, row.birth_year, row.created_at]);

  await mysqlClient.query(mysqlQueryActors, [valuesActors]);

  // select movie_actors from PostgreSQL and insert into MySQL

  const pgQueryMovieActors = 'SELECT * FROM movie_actors';
  const resMovieActors = await psqlClient.query(pgQueryMovieActors);

  const mysqlQueryMovieActors = 'INSERT INTO movie_actors (movie_id, actor_id) VALUES ?';
  const valuesMovieActors = resMovieActors.rows.map(row => [row.movie_id, row.actor_id]);

  await mysqlClient.query(mysqlQueryMovieActors, [valuesMovieActors]);
  
} catch (error) {
    console.error('Error migrating data:', error);
  
}

}

migrateData();