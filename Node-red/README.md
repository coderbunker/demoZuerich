# Node-red on RaspberryPi


In this Project it's abought, how Node-red (configured on a RaspberryPi) communicates with an arduino and a RabbitMQ.
Node-red collects the data from the Arduino and pushes it on the Queue (RabbitMQ)





## Getting Started



1. Download Noobs (from the official Site) and kofigure your RaspberryPi as you wish.
2. Type in the command line: 	
* sudo apt-get update;
* sudo apt-get upgrade; 
* curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash;
* nvm install v6.4.0;
* sudo npm install -g node-red (in the directory /);
* sudo npm i node-red-node-serialport (in the directory ~/.node-red) (to install the mod for getting data from the Arduino to the Nodered);
* sudo npm install -g node-red-contrib-amqp2 (in the directory /) (to install the mod for amqp2(RabbitMQ))
3. Type in the command: Node-red, to start node-red and go in your Browser to localhost with port 1880.
4. Now you can work with Node-red.
5. for the right flow, see: https://www.youtube.com/watch?v=S05QMLl3wfs&list=PLhVLYZA4y4CZ-37uF35Rih01o-AwpLXgD&index=3 


### Prerequisites



You will need tho have an microSDcard and a RaspberryPi (RaspberryPi 3, Charger, a mouse and keyboard, Monitor, etc.)




## Running the tests


if you want to test it, you can put a debug-point in your flow or check in your Queue, if any data was written in there.  
