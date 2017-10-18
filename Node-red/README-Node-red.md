# Node-red on RaspberryPi


In this Project it's abought, how Node-red (configured on a RaspberryPi) communicates with an arduino and a RabbitMQ.
Node-red collects the data from the Arduino and pushes it on the Queue (RabbitMQ)




## Getting Started



1. Download Noobs (from the official Site) and kofigure your RaspberryPi as you wish.
2. Type in the command line: 	sudo apt-get update 
				sudo apt-get upgrade 
				sudo npm install -g node-red (in the directory /)
				sudo npm i node-red-node-serialport (in the directory ~/.node-red) (to install the mod for getting data from the Arduino to the Node-red)
				sudo npm install -g node-red-contrib-amqp2 (in the directory /) (to install the mod for amqp2(RabbitMQ))
3. Type in the command: Node-red, to start node-red and go in your Browser to localhost with port 1880.
4. Now you can work with Node-red.


### Prerequisites



You will need tho have an microSDcard and a RaspberryPi (RaspberryPi 3, Charger, a mouse and keyboard, Monitor, etc.)




## Running the tests


if you want to test it, you can put a debug-point in your flow or check in your Queue, if any data was written in there.  