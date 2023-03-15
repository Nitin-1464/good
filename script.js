let json ={ 
    quetions :[ {
        quetion :"hello"
         
    }]

};

document.getElementById("quiz").innerHTML =






function updateTime() {
    // Create a new Date object
    var now = new Date();
  
    // Get the current time as a string
    var timeString = now.toLocaleTimeString();
  
    // Set the text of the clock element to the current time
    document.getElementById("clock").innerHTML = timeString;
  }
  
  // Call updateTime() every second to update the clock
  setInterval(updateTime, 1000);
  