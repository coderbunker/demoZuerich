# DemoZuerich

This is a shared repo between the TBZ interns. Every Subsystem has its own Subfolder.

This is the diagram of the finished product:
![alt text](https://github.com/coderbunker/demoZuerich/blob/master/diagram.png)

In this project the Arduino sends data to a node-red instance. 
The node-red instance then sends that data to a RabbitMQ queue.
RabbitMQ then sends that data to an PostgreSQL database.
PostgreSQL sends that data to PostGraphQL where it can be read by NGINX
This data is then read by React and React-Native for the frontend


## necessary links for setting up a whole system

1. Arduino:
* To get the arduino up and running you should be able to follow the instructions in the 	[Arduino README](https://github.com/coderbunker/demoZuerich/blob/master/Arduino/README.md)
* For further infomation on the programming language you can visit https://www.arduino.cc/en/Reference/HomePage
* For more information about the electronics https://learn.sparkfun.com/tutorials is a useful page
* https://www.tinkercad.com/things/35a5232xdGf-welcome-to-arduino/editel?collectionid=O0QHK73ISCC2DXD&lessonid=EIF8DQEISCBOSF2&projectid=O0QHK73ISCC2DXD#/sxs-viewer

2. Node-red:
* To get node-red up and running you should be able to follow the instructions in the [Node-red README](https://github.com/coderbunker/demoZuerich/blob/master/Node-red/README.md)
* Tutorial for Nodejs: https://www.tutorialspoint.com/nodejs/
* https://nodered.org/docs/getting-started/installation

3. Qingcloud_VM: 
* To get Quincloud up and running you should be able to follow the instructions in the [Qingcloud_VM README](https://github.com/coderbunker/demoZuerich/blob/master/Qingcloud_VM/README.md)

4. Rabbitmq:
* To get Rabbitmq up and running you should be able to follow the instructions in the [Rabbitmq README](https://github.com/coderbunker/demoZuerich/blob/master/Rabbitmq/README.md)
* MQTT tutorial: https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-the-mosquitto-mqtt-messaging-broker-on-ubuntu-16-04

5. PostgreSQL:
* To get PostgreSQL up and running you should be able to follow the instructions in the [PostgreSQL README](https://github.com/coderbunker/demoZuerich/blob/master/PostgreSQL/README.md)
* http://www.postgresql.de/
* different Dokumentationes: https://www.postgresql.org/docs/9.6/static/index.html

6. Graphql:
* To get Graphql up and running you should be able to follow the instructions in the [Graphql README](https://github.com/coderbunker/demoZuerich/blob/master/graphql/README.md)
* https://www.howtographql.com/?_ga=2.9406134.288812358.1507194519-67924469.1507194519

7. nginx:
* To get the nginx up and running you should be able to follow the instructions in the [Graphql README](https://github.com/coderbunker/demoZuerich/blob/master/nginx/README.md)
* Nginx Wiki: https://www.nginx.com/resources/wiki/

8. temperatureapp/temperatureweb: 
* To get the temperatureapp/temperatureweb up and running you should be able to follow the instructions in the [temperatureapp README](https://github.com/coderbunker/demoZuerich/blob/master/temperatureapp/README.md)
* Get startet with react-native: https://facebook.github.io/react-native/docs/getting-started.html
* React-nativ: http://blog.tamizhvendan.in/blog/2015/11/23/a-beginner-guide-to-setup-react-dot-js-environment-using-babel-6-and-webpack/
* javascript: https://www.w3schools.com/js/
* javascript: https://javascript.info/

9. Ansible: 
* To get Ansible up and running you should be able to follow the instructions in the [Ansible README](https://github.com/coderbunker/demoZuerich/blob/master/Ansible/README.md)
* Description of Ansible https://ansible.com/
* Getting startet: http://docs.ansible.com/ansible/latest/intro_getting_started.html
* General guide to install Ansible on Ubuntu 16.04  https://docs.ansible.com/ansible/intro_installation.html

10. com.coderbunker.bledemo: 
* To get the com.coderbunker.bledemo up and running you should be able to follow the instructions in the [com.coderbunker.bledemo README](https://github.com/coderbunker/demoZuerich/blob/master/com.coderbunker.bledemo/README.md)
* react-native-ble-manager: https://github.com/innoveit/react-native-ble-managerY
* Get startet with react-native: https://facebook.github.io/react-native/docs/getting-started.html
* React-nativ: http://blog.tamizhvendan.in/blog/2015/11/23/a-beginner-guide-to-setup-react-dot-js-environment-using-babel-6-and-webpack/
* javascript: https://www.w3schools.com/js/
* javascript: https://javascript.info/ 


## Youtube-Playlist of neighbours

https://www.youtube.com/playlist?list=PLhVLYZA4y4CZ-37uF35Rih01o-AwpLXgD
