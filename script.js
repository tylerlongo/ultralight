function updateTimeStatus() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    let time = "";
    if(hour < 13) {
        time = "current time: " + hour + ":" + minute + "am"
    }
    else {
        time = "current time: " + (hour-12) + ":" + minute + "pm"
    }
        document.getElementById('time').innerHTML = time
  }
  
  updateTimeStatus(); // Call the function to set initial status
  
  // Update status every second
  setInterval(updateTimeStatus, 1000);