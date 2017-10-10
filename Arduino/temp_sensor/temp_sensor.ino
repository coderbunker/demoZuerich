// Define the pint on wich the sensor is connectet
const int sensorPin = A0;

void setup() {
  //Beginns a connection to the computer
  Serial.begin(9600);
}
void loop() {
  //read from the sensor
  int sensorVal = analogRead(sensorPin);

  //Write the read value from the sensor to the computer
  //Serial.println(sensorVal);

  //Calculate the voltage
  float Volts = (sensorVal/1024.000)*5.000;

  //Write the calculatet voltage to the computer
  //Serial.println(Volts);

  //Calculate the temperature
  float Temperature  = (Volts*100.000);

  //Write the temperature to the computer
  Serial.println(Temperature);
}
