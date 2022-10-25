# aero-rest-api
## To start and install the project you will need:
  * MySQL [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04);
  * NodeJS >= 16.17.0 [installation guide](https://nodejs.org/en/);

## Create database and tables:
  * Let's start MySQL with the command ```mysql -u root -p```
  * Create database:
  ```sql
  CREATE DATABASE db_name; 
  USE db_name;
  ```
  * Create tables in database:
  ```sql
  create table users(
  id int auto_increment primary key,
  login text,
  password text
);

create table files(
  id int auto_increment primary key,
  owner_id int,
  name text,
  extension text,
  mimetype text,
  size int,
  upload_date datetime,
  file_link text,
  foreign key(owner_id) references users(id)
);
```

## Create new user and access rights:
  * Create a new user: 
  ``` sql
  CREATE USER "user_name"@"localhost" IDENTIFIED BY "your_password";
  ```
  * Get access rights: 
  ```sql
  GRANT ALL ON db_name.* "user_name"@"localhost";
  ```

## Project settings:
  * Clone the project:
  ```
  git clone git@github.com:IvanLivshits/rest-api.git
  ```
  ```
  git clone https://github.com/IvanLivshits/rest-api.git
  ```
  * In the project directory, run the following commands:
  ```
  cd db
  npm install
  ```
  * In the "server" folder, create a file called ".env", The [example](https://github.com/IvanLivshits/rest-api/blob/main/server/env_example.txt) is in the same folder. Then run:
  ```
  npm install
  npm start
  ```
  * It remains only to configure and run the client:
  ```
  cd .. 
  cd client
  npm install
  npm start
  ```
  
