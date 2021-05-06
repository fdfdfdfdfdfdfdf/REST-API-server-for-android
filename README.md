# REST-API-server-for-android

Simple REST API server for android

![image](https://user-images.githubusercontent.com/54389889/117373094-95ed8280-af05-11eb-81f1-31edad2f4e9e.png)

</br>

## Installation

I used MySQL using Docker. it doesn't matter if you use a local database, but if you want to use Docker, do the following:

</br>

1. Install Docker.

</br>

2. Running MySQL container, like this:
```docker
docker run -dit --name mysql -e MYSQL_ROOT_PASSWORD=qwer1234 -p 13306:3306 mysql
```

</br>

3. Connect to the mysql server. If you don't have a program that can access mysql, you can work directly inside the docker container. enter the command below to connect to the container.

```docker
docker exec -it mysql /bin/bash

... After connecting to the container

mysql -u root -p
```

</br>

4. Create database and simple table and add elements.
```sql
create database main;

use main;

create table user(
    id varchar(25) primary key,
    data varchar(200)
    );
```


</br>

5. When connecting from node.js, add the following command to remove the authentication error.

Native MySQL : 

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwer1234';
FLUSH PRIVILEGES;
```

Docker MySQL :

```sql
CREATE USER 'root'@'172.17.0.1' IDENTIFIED WITH mysql_native_password BY 'qwer1234';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

</br>

6. Clone this repository
```bash
git clone https://github.com/hotchya/REST-API-server-for-android.git
```

</br>

7. Install npm packages
```bash
cd REST-API-server-for-android

npm install
```

</br>

## Usage
Run the server,
```bash
node app.js
```
basic address : http://127.0.0.1:3000/