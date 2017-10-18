RabbitMQ

The RabbitMQ is connected to PostgreSQL-Server, Node-RED and GraphSQL. This instructions are based on Ubuntu Server 16.04

Installation

Server:

echo 'deb http://www.rabbitmq.com/debian/ testing main' | tee /etc/apt/sources.list.d/rabbitmq.list
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | apt-key add -

sudo apt-get install rabbitmq-server

Web-GUI:

rabbitmq-plugins enable rabbitmq_management

Prerequisites

Ubuntu 16.04

Network access:
If you are on the local machine, type in the URL: 127.0.0.1:15672
If you are on a remote machine, type in te URL: "IP of the machine":15672

The RabbitMQ Service will start automatically after a reboot from the server.

Authentification:

for administrators
username: admin
password: 12345

or for guests:
username: guest
password: guest

Status from the RabbitMQ service:

invoke-rc.d rabbitmq-server status

Start RabbitMQ service:

invoke-rc.d rabbitmq-server start

Stop RabbitMQ service:

invoke-rc.d rabbitmq-server stop

Version

rabbitmq v.4.2.6
