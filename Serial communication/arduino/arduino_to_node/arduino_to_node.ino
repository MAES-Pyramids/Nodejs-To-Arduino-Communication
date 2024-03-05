// Arduino code

const int switchPin = A0;

void setup() {
  Serial.begin(9600);
  pinMode(switchPin, INPUT);
}

void loop() {
  int switchState = digitalRead(switchPin);

  Serial.print("switchState:");
  Serial.println(switchState);

  delay(1000);
}
