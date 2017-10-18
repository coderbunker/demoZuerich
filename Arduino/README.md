# Arduino subproject 

Project for the Sensors of the project Coworking Super Nanny
The purpose of the Arduino was to collect data like the temperature from a room and send it to node-red
![alt text](https://github.com/coderbunker/demoZuerich/blob/master/Arduino/diagram.png)

## Prerequisites

You will need:
* an Arduino with the usb cable to connect it to the Computer (we used an Arduino Uno)
* some cables   (we used 5x male to male cables and 3x male to female to connect the sensor to the breadboard)
* a breadbord (we used a medium sized one like [this](https://cdn.logicsupply.com/media/catalog/product/cache/1/small_image/425x/9df78eab33525d08d6e5fb8d27136e95/p/t/ptbb-400w-medium-breadboard-white-400points.jpg) but a smaller one would have done the job too)
* a temperature sensor (we used a LM35DZ temperature sensor datasheet available [here](http://www.futurlec.com/Datasheet/Linear/LM35DZ.pdf)
* the Arduino IDE installed (downloadable for free [here](https://www.arduino.cc/en/Main/Software))

## Setup

Clone the repository
```sh
$ git clone https://github.com/coderbunker/demoZuerich
```
Wire up the Arduino like in [this](https://imgur.com/a/qJMjA) picture.
Alternatively you could wire it up like [this](https://imgur.com/njYTYXn) so you can move the sensor as needed.
Open the file temp_sensor.ino with the Arduino IDE and upload it to the Arduino.
If you now open the serial monitor in the IDE you should see the data coming from the Arduino

## Test

You can test if everything is correct by holding the temperature sensor between your fingers.
You should see the temperature increase
