# Arduino subproject 

Project for the Sensors of the project Coworking Super Nanny

## Prerequisites

You will need:
* an Arduino with the usb cable to connect it to the Computer
* some cables  
* a temperature sensor
* the Arduino IDE installed (downloadable for free [here](https://www.arduino.cc/en/Main/Software))

## Setup

Clone the repository
```sh
$ git clone https://github.com/coderbunker/demoZuerich
```
Wire up the Arduino like in [this](https://imgur.com/a/qJMjA) picture.
Alternatively you could wire it up like [this](https://imgur.com/njYTYXn) so you can move the sensor as needed.
Open the file temp_sensor.ino with the Arduino IDE and upload it to the Arduino.
If you now open the serial monitor in the IDE you shoud see the data coming from the Arduino

## Test

You can test if everything is correct by holding the temperature sensor between your fingers.
You should see the temperature increase
