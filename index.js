// current-day event

$(document).ready(function(){

    var isDown = false;   // Tracks status of mouse button
  
    $(document).mousedown(function() {
        isDown = true;      // When mouse goes down, set isDown to true
    })
    .mouseup(function() {
        isDown = false;    // When mouse goes up, set isDown to false
    });
  
    $(".day").mousedown(function(){
        if(this.className.includes("current-day")){
            this.className = this.className.replace(" current-day", "");
        }
        else{
            this.className += " current-day";
        }
    });

    $(".day").mouseover(function(){
        if(isDown) {        // Only change css if mouse is down
            if(this.className.includes("current-day")){
                this.className = this.className.replace(" current-day", "");
            }
            else{
                this.className += " current-day";
            }
        }
    });

});