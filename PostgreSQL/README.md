# PostgreSQL

The PostgreSQL Server is connected to the RabbitMQ, Node-RED (installed on RaspberryPI) and GraphQL. 
OBD-Data of React-native-App will be stored in Database. All Server Roles have been installed on Ubuntu 16.04
## Installation

Server: 

sudo apt-get install postgresql 

Client:

sudo apt-get install postgresql-client

GUI:

sudo apt-get install pgadmin3

### Prerequisites

Ubuntu 16.04 or later


### Get Started

Getting to postgres console: 

sudo -i -u postgres

Starting prompt by typing:

psql

Create admin-pw:

\password postgres 

After that you can define a new password for standard admin: postgres


Network access: 

open: /etc/postgresql/9.5/main/postgresql.conf as sudo with editor (nano, gedit).

Type in: listen_addresses = '*' and save the file. 

After that you can login to postgresql with any computer in network.

Authentification: 

open: /etc/postgresql/9.1/main/pg_hba.conf as sudo with editor (nano, gedit).

go to row: host -> type: ALL ALL 0.0.0.0/0 TRUST 


Creating first user: 


sudo -u postgres createuser -P -d username


Creating first database: 


sudo -u postgres createdb -0 username database 


Control the PostgreSQL Service:


sudo /etc/init.d/postgresql ..

-start
-restart
-stop
-reload
-force-reload
-status

Creating first dump (backup):

All databases: 

sudo -u postgres pg_dumpall > all-databases.dump

one database:

sudo -u postgres pg_dump --format=custom --dbname=database --file=database.dump


Connect PostgreSQL to Node-RED:

Install: npm install node-red-contrib-postgres on System where Node-RED is installed. 

Create a database flow and type in information to connect database.




## Version

PostgreSQL v 5.0

## Authors

* **Alessandro Pugliese** - *Initial work* - [Coderbunker] https://github.com/coderbunker


