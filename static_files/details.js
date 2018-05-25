$(document).ready(function() {
	var selectedDays = JSON.parse(localStorage.getItem('staggeredDays'));
	
	//adds date to table, separate groups
	for (var i = 0; i < selectedDays.length; i++) {
		var string = JSON.stringify(selectedDays[i]);
		for (var j = 0; j < selectedDays[i].length; j++) {
			console.log(selectedDays[i][j]);
			$("tr:eq(0)").append("<td>" +  selectedDays[i][j] + "</td>");
			$("tr:eq(1)").append("<td class='day'>" + "one" + "</td>");
			$("tr:eq(2)").append("<td class='day'>" + "two" + "</td>");
			$("tr:eq(3)").append("<td class='day'>" + "three" + "</td>");
			$("tr:eq(4)").append("<td class='day'>" + "four" + "</td>");
			$("tr:eq(5)").append("<td class='day'>" + "five" + "</td>");
			$("tr:eq(6)").append("<td class='day'>" + "six" + "</td>");
			$("tr:eq(7)").append("<td class='day'>" + "seven" + "</td>");
			$("tr:eq(8)").append("<td class='day'>" + "eight" + "</td>");
			$("tr:eq(9)").append("<td class='day'>" + "nine" + "</td>");
			$("tr:eq(10)").append("<td class='day'>" + "ten" + "</td>");
			$("tr:eq(11)").append("<td class='day'>" + "eleven" + "</td>");
			$("tr:eq(12)").append("<td class='day'>" + "twelve" + "</td>");
		}
		$("tr:eq(0)").append("<td class='empty-day'></td>");
		$("tr:eq(1)").append("<td class='empty-day'></td>");
		$("tr:eq(2)").append("<td class='empty-day'></td>");
		$("tr:eq(3)").append("<td class='empty-day'></td>");
		$("tr:eq(4)").append("<td class='empty-day'></td>");
		$("tr:eq(5)").append("<td class='empty-day'></td>");
		$("tr:eq(6)").append("<td class='empty-day'></td>");
		$("tr:eq(7)").append("<td class='empty-day'></td>");
		$("tr:eq(8)").append("<td class='empty-day'></td>");
		$("tr:eq(9)").append("<td class='empty-day'></td>");
		$("tr:eq(10)").append("<td class='empty-day'></td>");
		$("tr:eq(11)").append("<td class='empty-day'></td>");
		$("tr:eq(12)").append("<td class='empty-day'></td>");
	}
	


	//sToLeN day code
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