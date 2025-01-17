// Define the port for the LED
int lightPin = 13;
 
void setup() 
{ 
  
  // Initialize the light pin
  pinMode(lightPin, OUTPUT);
  
  // Initialize the Serial
  Serial.begin(9600);
  
}

void loop() {
  
  // CHeck to see if Serial data is being received
  if (Serial.available() > 0) {
    
    // Create a new string variable to receive Serial data
    String receivedString = "";
    
    // Loop through received data and append to the receivedString variable
    while (Serial.available() > 0) {
      receivedString = char(Serial.read ());
    }
    
    // Print received Serial data
    Serial.println(receivedString);
    
    // Change LED status based on received data
    if(receivedString == "1")
      digitalWrite(lightPin,HIGH);  
    else
      digitalWrite(lightPin,LOW);
    
  }

}
