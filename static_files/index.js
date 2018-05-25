// current-day event
var selectedDays = new Array(31);
selectedDays.fill(false);


//get currently selected days
function getSelectedDays() {
    var days = [];
    for (var i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i] == true) {
            days.push(i+1);
        }
    }
    return days;
}

/* Separates selected days when:
 * 		there is an unselected day before the next selected day
 * 		the next day is Monday (weekly separation)
*/
function getSelectedDaysStaggered() {
	
	//get day of week of day 1
	//use this value to separate selected days into weeks
	var cols = $(document.getElementById("first-row")).children('td');
	var oneIndex = 0;
	for (var i = 0; i < cols.length; i++) {
		if (cols[i].textContent == 1) {
			oneIndex = i;
		}
	}

	//add break for nonconsecutive days + end of week
	var selectedDays = getSelectedDays();
	var staggeredDays = [];
	var currentDayGroup = [];
	for (var i = 0; i < selectedDays.length; i++) {
		currentDayGroup.push(selectedDays[i])
		if (i+1 == selectedDays.length || 
			selectedDays[i+1] - selectedDays[i] > 1 ||
			selectedDays[i+1] % 7 == (8-oneIndex)) {
				staggeredDays.push(currentDayGroup);
				currentDayGroup = [];
		}
	}
	localStorage.setItem('staggeredDays', JSON.stringify(staggeredDays))
	return staggeredDays;
}



$(document).ready(function(){
    var isDown = false;   // Tracks status of mousedownse button
  
    $(document).mousedown(function() {
        isDown = true;      // When mouse goes down, set isDown to true
    })
    .mouseup(function() {
        isDown = false;    // When mouse goes up, set isDown to false
    });
  
    $(".day").mousedown(function(){
        if(this.className.includes("current-day")){
            this.className = this.className.replace(" current-day", "");
            selectedDays[parseInt(this.textContent)-1] = false;

        }
        else{
            this.className += " current-day";
            selectedDays[parseInt(this.textContent)-1] = true;
        }
    });

    $(".day").mouseover(function(){
        if(isDown) {        // Only change css if mouse is down
            if(this.className.includes("current-day")){
                this.className = this.className.replace(" current-day", "");
                selectedDays[parseInt(this.textContent)-1] = false;
            }
            else{
                this.className += " current-day";
                selectedDays[parseInt(this.textContent)-1] = true;
            }
        }
    });

    $("#details").click(function(){
    	getSelectedDaysStaggered();
    });

});
