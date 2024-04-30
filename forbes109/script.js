function updateTimeStatus() {
    const now = new Date();
    const hour = now.getHours();
    let minute = now.getMinutes();
    let time = "";
    let status = "";
    
    if(hour>6 && hour<18) {
        status = "day"
    }
    else {
        status = "night"
    }

    document.body.setAttribute("status", status);
    
    if(minute < 10) {
        minute = "0" + minute
    }
    if(hour < 1) {
        time = "current time: " + 12 + ":" + minute + "am"
    }
    else if(hour < 12) {
        time = "current time: " + hour + ":" + minute + "am"
    }
    else if(hour < 13) {
        time = "current time: " + hour + ":" + minute + "pm"
    }
    else {
        time = "current time: " + (hour-12) + ":" + minute + "pm"
    }
    document.getElementById('time').innerHTML = time
}
  
  updateTimeStatus(); // Call the function to set initial status
  
  // Update status every second
  setInterval(updateTimeStatus, 1000);