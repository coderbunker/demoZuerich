const int sensorPin = A0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int sensorVal = analogRead(sensorPin);
  //Serial.println(sensorVal);
  float Volts = (sensorVal/1024.000)*5.000;
  //Serial.println(Volts);
  float Temperature  = (Volts*100.000);
  Serial.println(Temperature);
}
